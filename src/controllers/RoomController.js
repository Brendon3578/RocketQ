const Database = require("../db/config")

async function validateRoomExits (roomId) {
    /* Função para checar se a sala existe no DB */
    const db = await Database()
    let roomIdExistsInDB

    const allRoomIds = await db.all(`SELECT id FROM rooms`)
    roomIdExistsInDB = allRoomIds.some(roomExistId => roomExistId.id ===  Number(roomId))
    console.log(`Value: ${roomId} exists on DB? ${roomIdExistsInDB}`)

    return (roomIdExistsInDB)
}

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password

        let roomExists = true
        let roomId = ""
        
        while(roomExists){
            /* Resetar o roomId */
            roomId = ""

            /* Gerar o número da sala */
            for(let i = 0; i < 6; i++){
                roomId += Math.floor(Math.random() * 10).toString()
            }

            /* Verificar se o número ja existe*/
            roomExists = await validateRoomExits(roomId)

            if(!roomExists){
                /* Inserir a sala no banco */
                await db.run(`INSERT INTO rooms (id, pass)
                VALUES (${parseInt(roomId)}, "${pass}")`)

                roomExists = false
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}/status`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const status = req.params.status

        // catch wrong status url
        const allStatus = ['status', 'wrongpassword']
        if (allStatus.indexOf(status) == -1){
            res.redirect(`/room/${roomId}/status`)
        }

        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1 `)
        let isNoQuestions

        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render("room", {
            roomId: roomId,
            questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions,
            activePopup: status
        })
    },

    async enter(req, res){
        const roomId = req.body.roomId

        const roomFoundInDB = await validateRoomExits(roomId)

        if(!roomFoundInDB) {
            res.render(`index`, {page: 'enter-room', roomExists: "true"})
        }else{
            res.redirect(`/room/${roomId}/status`)
        }

    }
}