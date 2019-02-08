module.exports={
    register: (req, res) => {
        // create a new user in the database
        // respond with the newly created user

        const {username, password} = req.body
        const{session} = req;
        const db = req.app.get('db')
        
        console.log(req.body)
        res.status(201).send(session.username)
    },

    login: async (req, res) => {
        const {username, password} = req.body
        const{session} = req;
        const db = req.app.get('db')
    }
}