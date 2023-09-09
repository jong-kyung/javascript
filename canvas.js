const canvas = document.querySelector("#canvas");

// 2d모드의 그리기 객체를 취득한다 => canvas에 그림을 그릴 수 있음
const ctx = canvas.getContext('2d');

// // 색 설정 (css에서 사용 가능한 색상)
// ctx.fillStyle = 'blue'

// // 사각형 그리기 => fillRect(x,y,width,height)
// ctx.fillRect(0, 0, 150, 75)

// 새선 그리기 설정
ctx.beginPath();

// 출발점 지정
ctx.moveTo(50, 50);

// 도착점 지정
ctx.lineTo(300, 50);
ctx.lineTo(300, 200);
ctx.lineTo(50, 200);
ctx.lineTo(50, 50);

// 선 두께/색상 설정
ctx.lineWidth = 20;
ctx.strokeStyle = 'pink';

// 선 끝부분 처리
ctx.lineCap = 'round' //square, butt, round


// 선 꺾인부분 처리
ctx.lineJoin = 'round' //mitter, round, bevel

// ctx.setLineDash([20, 10, 40, 10]); // 간격이 20, 10, 40, 10인 점선 설정

// 선 그리기
ctx.stroke();

// 선 내부에 색채우기
ctx.fillStyle = 'blue';
ctx.fill()

// 원 그리기
ctx.beginPath();

// 원 모양 설정 =>  ctx.arc(x, y, 반지름, 시작각도, 마지막각도) 
ctx.arc(500, 500, 50, 0, 2 * Math.PI)


ctx.stroke();

ctx.set
