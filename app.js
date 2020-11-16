// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// process.argv[1]

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }  
// };

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    // profileDataArr.forEach((profileItem) => {
    //     console.log(profileItem)
    //   });
    // };
    //then cleaned up foreach even more
    profileDataArr.forEach(profileItem => console.log(profileItem));
  };
printProfileData(profileDataArgs);