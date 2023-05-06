function exampleOne(numberValue) {
    // sequence 1
    // 매개변수가 정수인지 확인하는 함수 integerCheck()
    function integerCheck(data) {
        if(Number.isInteger(data) === true) {
            return data;
        } else {
            return new Error('이 함수는 정수여야 합니다');
        }
    }
    // sequence 2
    function innerOne(one) {
        return one + 1;
    }
    // sequence 3
    function innerTwo(two) {
        return two + 2;
    }
    // sequence 4
    function innerThree(three) {
        return three + 3;
    }
    // sequence 5
    function innerFour(four) {
        return four + 4;
    }

// sequence가 1, 2, 3, 4, 5 순서로 실행되야 함
// 내부 함수 inner 시리즈를 순서대로 실행시켜
// 리턴된 값을 다음 함수에 인자로 넘겨주는 형태가 아래에
// 작성 되어 있습니다.
// 작동에는 전혀 문제가 없지만
// 도출되는 것은 하나의 목적일 뿐인데
// 변수가 낭비되는 것 같습니다.

// 난이도 중급 : 해당 코드를 콜백지옥으로 처리하면 어떻게 작성 될까요?
// 결과는 20입니다

// 난이도 고급 : 해당 코드를 Promise로 처리하면 어떻게 작성 될까요?
// async/await로 처리하면 어떻게 작성 될까요?

// 배운적 없음 : 부모 함수를 클래스로 만들고
// 인스턴스에 동적으로 4개의 inner함수를 메서드로 추가할 수 있나요? 

// 호출
integerCheck(numberValue)
const first = innerOne(numberValue);
const second = innerTwo(first);
const third = innerThree(second);
const fourth = innerFour(third);
return fourth;
}

const result = exampleOne(10);
console.log(result);