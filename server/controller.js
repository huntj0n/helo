const bcrypt = require('bcrypt')

module.eexports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body,
        const user = await db.check_user({username});
        if(user[0]){
            return res.status(400).send('Im sorry Dave, that username is taken')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.register_user({username, hash});
        req.session.user = newUser[0];
        res.status(201).send(req.sent.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body;

        const user = await db.check_user({username});
        if(!user[0]){
            return res.status(400).send('Im sorry Dave, Im afraid that information is incorrect.')
        }
        const authenticated = bcrypt.compareSync(password, user[0].password)
        if(!authenticated){
            return res.status(401).send('Im sorry Dave, Im afraid I cannot do that.')
        }
        delete user[0].password;
        req.session.user = user[0];
        res.status(202).send(req.session.user);

    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    newPost: (req, res)=> {
        const db = req.app.get('db');
        const {id, title, img, content, author_id} = req.body;

        db.post.new_post(id, title, img, content, author_id)
        .then(()=> res.sentStatus(200))
        .catch(err => res.status(404).send(err))
    },  
    getUserPosts: ()=> {
        const db = req.app.get('db');
        const {id} = req.params;

        db.post.get_user_posts(id)
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(404).send(err))
    },

}