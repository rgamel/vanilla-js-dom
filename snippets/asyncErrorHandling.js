// in a real project this would be in a different file/module
const DataService = { 
  // ...
  retrieveData = () => Promise.resolve({ value: 'someValue'})
  // ...
}

// ...
let isLoading = false
const setIsLoading = (val) => {
  isLoading = val
}

// async error handling with try/catch:
const getDataForDisplay = async () => {
  try {
    setIsLoading(true)
    const data = await DataService.retrieveData()
    console.log(data.value)
  } catch (err) {
    // do something with the error
    console.log(err)
  } finally {
    setIsLoading(false)
  }  
}

// equivalent to this one with Promises:
const getDataForDisplayWithPromises = () => {
  setIsLoading(true)
  return DataService.retrieveData.then(data => {
    // do something with data
    console.log(data.value)
  }).catch((err) => {
    // handle error
    console.log(err)
  }).finally(() => {
    setIsLoading(false)
  })
}
