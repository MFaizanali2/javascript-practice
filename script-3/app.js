  // function myfunction(msg, n){
        //     console.log("Welcome Mr Faizi");
        //     console.log("Learning JS");
        //     console.log(msg * n);
        // }
        // myfunction("I love Js", 100);
        // myfunction("I love Js");

        // function sum(x,y){
        //     s = x + y;
        //     return s;
        // }
        // let value = 3 + 8;
        // console.log(value); 

        // function sum(a,b) {
        //     return a + b;
        // }

        // let arrow = (a, b) => {
        //     console.log(a + b);
        // }

        // function mul(a,b) {
        //     return a * b;
        // }

        // let arrowmulti = (a,b) => {
        //     console.log(a*b);
        // }

        // let cross = () => {
        //     console.log("Hello World");
        // }

        function vowels(str) {
            let count = 0;
            for (const char of str) {
                if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
                    count++
                }
            }
            console.log(count);
        }