// without provide key
export default defineNuxtPlugin((nuxtApp)=>{
  const users=usersList();
  nuxtApp.login=(username,password)=>{
      console.log(username)
      console.log(password)
      return users.value.some((item)=>item.user===username && item.pass===password)

  }
})