export default function(context){

    console.log(context.store.state.authuser.user)
    const user = context.store.state.authuser.user
    console.log(user)
    if(user){
        console.log(context)
        return
    }else{
        context.$toast.error('You need to login to view the dashboard', {
            duration:4000
        })
        context.redirect('/')
        
    }
    
   
    
 
}