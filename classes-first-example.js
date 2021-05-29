class User{
    constructor(props){
        const {
            name, 
            email, 
            password, 
            role
        } = props

        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }
     createPost(postProps){
        return new Post(postProps)
     }
}

class BlogText{
    constructor(props){
        this.content = props.content
        this.date = props.date
        this.user = props.user
    }

    
}


class Post extends BlogText{
    constructor(props){
        super(props)
        this.title = props.title
        this.image = props.image
        this.reactions = props.reactions
        this.tags = props.tags
        this.postId = props.postId

    }

    get header(){
        return `${this.title} - ${this.date}`
    }

    set header(str){

        //const title = str.split(' - ')[0]
        //const date = str.split(' - ')[1]
//esta es la deconstruccion
        const [title, date] = str.split(' - ')

        this.title = title
        this.date = date
    }
}

class Reply extends BlogText{
    constructor(props){
        super(props)
        this.postId = props.postId
    }
}

const user = new User ({ name: 'mary', email: 'oxesescom@gmail.com', password: 'asdasdfw34', role:['admin'], userId: Date.now() })

console.log(user)
const post = new Post({ 
    
    content: 'mi contenido',
    date: new Date(),
    user: user,
    title: 'mi titulo',
    image: 'asdasd.jpg',
    reactions: 5,
    tags: ['html', 'css'],
    postId: Date.now()

})

const replies = new Reply({
    content: 'mi contenido',
    date: new Date(),
    user: user,
    postId: post.Id
})

console.log(post)

