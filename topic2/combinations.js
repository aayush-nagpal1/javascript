
function combinations() {
    // document.body.appendChild("form");
    let str = document.getElementById("input").value;
    let arr = [];
    const INPUT_LEN = str.length;
    for (let k = 0; k <= INPUT_LEN; k++) {
        for (let i = k ; i <= INPUT_LEN; i++) {
            let flag;
            let substring = str.substr(k, i);
            if (arr.length === 0 && substring.length >0) {
                arr.push(substring);
            } else {
                for (let j = 0; j < arr.length;) {
                    if (arr[j] === substring) {
                        flag = 0
                        break;
                    } else {
                        flag = 1;
                        j++;
                    }
                }
                if (flag === 1) {
                    arr.push(substring);
                }
            }
        }   
    }
    alert(arr);
}
