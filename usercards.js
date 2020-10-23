const axios=require('axios')

const getSingleUser = () => {
  /*
    This function makes a GET request to an endpoint and returns the response as a JSON object.
    arguments: none
    returns: a JSON object containing data of a single user
  */
  try{
    const user = axios.get("http://faker.hook.io/?property=helpers.userCard&amp;locale=en_US")
    return user
  }
  catch (err){
    console.log(err)
  }
}

const addToArr = async () => {
    /*
    This function calls getSingleUser 25 times and stores the responses in an array, which it returns
    and logs to the console at the end.
    arguments: none
    returns: an array(length 25) of objects
  */
  let arr = []
  let counter = 25
  while (counter > 0){
    const singleUser = await getSingleUser()
    arr.push(singleUser.data)
    counter--
  }
  //comment out the below console.log if you do not wish to see the array output while running tests
  console.log(arr)
  return arr
}

addToArr()

module.exports = {getSingleUser, addToArr}
