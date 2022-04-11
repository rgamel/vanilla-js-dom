// in a real project this would be in a different file/module
const DataService = { 
  // ...
  retrieveData: async () => Promise.resolve({ value: 'someValue'})
  // ...
}

// ...
let isLoading = false
const setIsLoading = (val) => {
  isLoading = val
}

// async error handling with try/catch:
const getDataForDisplay = async () => {
  setIsLoading(true)
  try {
    const data = await DataService.retrieveData()

    // do something with the data
    console.log(data.value)
  } catch (err) {
    // do something with the error
    console.error(err)
  } finally {
    setIsLoading(false)
  }
}

// equivalent to this one with Promises:
const getDataForDisplayWithPromises = () => {
  setIsLoading(true)
  return DataService.retrieveData()
    .then((data) => {
        // do something with data
        console.log(data.value)
    }).catch((err) => {
        // handle error
        console.error(err)
    }).finally(() => {
        setIsLoading(false)
    })
}
