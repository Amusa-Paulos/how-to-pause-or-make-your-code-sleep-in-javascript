// Python sleep module
// 

(
    async () => {
        
        let introEls = document.querySelectorAll('.intro')

        
        for (let i = 0; i < introEls.length; i++) {
            const introEl = introEls[i];


            if (i == 1) {
                await new Promise((resolve, reject) => {
                    console.log("sleeping for 2 second...")
                    setTimeout(() => {
                        resolve()
                        console.log("i am awake");
                    }, 2000);
                })
                
            }
            if (i == 2) {
                await new Promise((resolve, reject) => {
                    console.log("sleeping for 3 second...")
                    setTimeout(() => {
                        resolve()
                        console.log("i am awake");
                    }, 3000);
                })
                
            }
            if (i == 3) {
                await new Promise((resolve, reject) => {
                    console.log("sleeping for 5 second...")
                    setTimeout(() => {
                        resolve()
                        console.log("i am awake");
                    }, 5000);
                })
                
            }

            introEl.style.display = "block"    
        }

        
    }
)()