# Time flow

[chart.js](https://www.chartjs.org/)를 활용한 시계열 차트를 구현한 페이지

라이브러리의 의존성을 최대한 낮추고 변경에 유연한 구조를 고민했습니다.

- [배포링크](http://time-flow.s3-website.ap-northeast-2.amazonaws.com/)
- [원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12)의 마지막 과제를 수행한 결과물입니다.
- 개발 기간 : 약 3일 (2023.09.11 ~ 2023.09.13)
- 개발 인원 : [@notusing11](https://github.com/notusing11) 1인

## 구현한 기능

### 기본 요구사항

- 네트워크로 받아온 데이터를 시계열 차트로 표시
  - 하나의 차트에 두가지 형태의 복합 그래프 표시
  - 형태에 따라 다른 Y축 및 단위 설정
- 데이터 hover 시 데이터 툴팁 표시
- 필터링 기능
  - 데이터에 따라 필터 가능한 버튼 표시
  - 선택한 버튼 및 해당 구역 하이라이트 처리
  - 특정 데이터 클릭시에도 동일한 필터링 적용
  <details>
  <summary>
  필터링 UI 예시
  </summary>
  <img src="/docs/required.png" alt="requiredUI"/>
  </details>

### 추가

- 백엔드 api와 상관없이 독립적으로 개발 가능하도록 mocking 설정

## Preview

| 이미지                                                        | 기능 설명                                                 |
| ------------------------------------------------------------- | --------------------------------------------------------- |
| ![시계열 차트 기본](/docs/chart_0.png)                        | 서로 다른 y축과 범위를 가진 기본 시계열 복합 차트 |
| ![시계열 차트 하이라이트](/docs/chart_1.png)                            | 필터 적용시 해당 지역 하이라이트                                |
| ![마우스 hover시 툴팁](/docs/chart_2.gif)                | 데이터 영역 hover시 해당 데이터의 상세수치를 보여주는 툴팁 표시                            |
| ![ 버튼 클릭시 필터링 ](/docs/chart_3.gif)             | 필터 버튼 클릭시 필터링 적용                          |
| ![데이터 클릭시 필터링 적용](/docs/chart_4.gif) | 데이터 클릭시 필터링 적용           |

## 실행 방법

- 실행하기 위해서는 Node.js가 설치된 환경이 필요합니다. (Node.js LTS, 18.17.0 버전 기준)
- 해당 레포지토리를 클론 후 디렉토리로 이동합니다.
- `npm install & npm start` 명령어로 실행하실 수 있습니다.

```
  git clone https://github.com/notusing11/time-series-chart.git && cd time-series-chart;
  npm install & npm start;
```

## 기술 스택 및 사용한 라이브러리

### 기본 라이브러리

<details>
<summary> CRA, axios 등</summary>
 - Create React App (+ typescript)</br>
 - react-router-dom : cliet-side 라우팅 및 에러 UI표시</br>
 - axios: HTTP client 라이브러리, 직렬화 및 에러처리 편의</br>
 - styled-components : 컴포넌트 기반 css 처리</br>
</details>

### 차트 라이브러리 : chart.js

#### 선택이유 1. 압도적인 1년 내 패키지 다운로드

- 가장 큰 이유는 패키지 다운로드가 많은 오픈소스 라이브러리이기 때문입니다. 다른 자바스크립트를 위한 차트 라이브러리도 대부분 오픈소스였습니다. 오픈소스의 경쟁력은 제품이 많은 사람들에게 쓰이는 그 자체라고 생각합니다. 많은 사람들이 사용해야 버그를 빨리 발견해서 개선할 수 있으며 다양한 의견이 수렴될 가능성이 높아지기 때문입니다.

- 패키지 다운로드 수는 [npmtrends.com](https://npmtrends.com)으로 확인했습니다.

![npmtrends image](/docs/npmtrends.png)

#### 선택 이유 2. 효율적인 canvas 방식

- 차트 랜더링 방식은 크게 두가지입니다. 대표적으로 d3와 chart.js는 각각 svg와 canvas 방식으로 랜더링하고 있습니다. vector 이미지인 svg와 달리 canvas는 브라우저 표준 API로 코드로 이미지를 표현합니다.
- svg는 좌표로 개별 요소를 표현하고 그리기 때문에 요소가 간결할 때는 유용하지만 요소가 늘어날 수록 DOM이 무거워지는 단점을 갖고 있습니다. 반면 canvas는 단일 DOM 요소로 접근성은 떨어지지만 많은 데이터 요소를 표현할 때 효율적입니다.
- 구현하고자 하는 기능을 고려했을 때 canvas 방식이 적합하다고 판단했습니다. 두가지 형태를 합친 복합 차트이며 시간 흐름을 담으면서 데이터가 많아질수록 복잡해질 가능성이 있기 때문입니다.

#### 선택 이유 3. 최근까지 유지보수되고 있는 살아있는 오픈소스

- github의 마지막 커밋일자로 최근 활동을 살펴보았습니다. 2023년 9월 13일 기준 chart.js는 마지막 커밋날짜가 2일 전으로 최근까지 활발하게 개선되고 있는 오픈소스라는 점을 알 수 있었습니다.
  ![chart.js commit status at 2023-09-13](/docs/chartjs_github.png)

#### 선택 이유 4. 다양한 레퍼런스 및 샘플 참고 가능

- 리액트에 맞게 적용시킨 라이브러리 대신 바닐라 자바스크립트인 chart.js를 선택한 이유는 레퍼런스였습니다. 처음 사용해보기 때문에 다양한 활용방식을 접하고 응용해볼 레퍼런스가 필요했습니다.
- 하지만 chart.js를 리액트에 맞게 적용한 [react-chartjs-2 라이브러리](https://react-chartjs-2.js.org/)의 경우 공식문서의 설명이 chart.js보다 적었습니다. 타입이나 레퍼런스는 기본적으로 chart.js를 참고할 수 있지만 react-chartjs-2에서도 동일하게 적용할 수 있는지 어떤 식으로 변형해야 할지 설명이 부족했습니다.
- 또한 검색했을 때 나오는 결과가 프레임워크와 상관없이 참고하기 좋았습니다.범용적으로 활용되는 라이브러리로 검색시에도 다양한 레퍼런스가 나왔습니다. 새롭게 라이브러리를 배우고 부딪힌 문제를 해결하기 위한 힌트를 얻기 좋았습니다.

## 폴더 구조

```
src
├── apis
├── components
├── configs
├── hooks
├── mocks
├── types
└── utils


```

### 폴더 구조별 설명

- api : 네트워크 api 호출관련 로직
- components : 도메인별 분리
- configs : 변경 가능성이 높은 설정
- hooks : api 호출과 상관없는 커스텀 훅
- mocks : 네트워크 요청을 가로채는 mock api 설정
- types : 타입
- utils : 커스텀훅이 아닌 함수들
<br/>
<br/>

# 구현 방법 및 활용한 전략


## 라이브러리의 의존성 최소화

- 차트 UI를 위한 다양한 자바스크립트 라이브러리가 존재합니다. 상황에 따라 라이브러리를 바꾸더라도 수정하기 편한 구조를 만들고자 했습니다. 또한 시각화가 목적인 UI인 만큼 수정 요구사항이 자주 발생할 가능성이 높다고 생각합니다. 의존성이 적고 유연한 방식을 고민했습니다.

### chartAdapter

- 도메인을 차트 라이브러리에서 요구하는 형식으로 변환하는 로직을 담고 있습니다. 라이브러리가 바뀌더라도 adaptor 부분만 수정하면 비즈니스로직에는 영향을 주지 않고 차트 데이터를 가공할 수 있습니다.
- 네트워크 요청으로 받아온 데이터에 따라 달라지는 부분을 변환하는데 초점을 두고 있습니다.

```typescript
// src/utils/chartAdaptor.ts

import { type ChartDataCustomTypesPerDataset } from 'chart.js';
...
timeFlowToChartData(timeFlow: TimeFlowType): ChartDataCustomTypesPerDataset {
  return {
    ...
    datasets: [
      {
        ...timeFlowChartDataOptions.area,
        data: Object.values(timeFlow).map(({ value_area }) => value_area),
      },
      {
        ...timeFlowChartDataOptions.bar,
        data: Object.values(timeFlow).map(({ value_bar }) => value_bar),
      },
    ],
  };
},
```

### configs

- 차트의 스타일링과 각종 설정은 configs 폴더 아래에 따로 분리했습니다. api 데이터에 영향을 받지 않는 설정들은 이곳에서 관리합니다.
- 차트 라이브러리의 설정파일이기 때문에 라이브러리 타입에 따르고 있습니다.

```typescript
// src/configs/timeFlowChartOptions.ts

import { ChartOptions } from 'chart.js';

export const timeFlowChartOptions: ChartOptions = {
  interaction: {
    intersect: false,
    mode: 'index',
  },
  scales: {
    y1: {
      type: 'linear',
      title: { display: true, text: 'Area' },
      position: 'left',
      suggestedMax: 200,
      ticks: {
        stepSize: 50,
      },
      ...
```

# 추가 정보

### 배포

- 해당 프로젝트는 AWS를 통해 배포되었습니다. [배포링크](http://time-flow.s3-website.ap-northeast-2.amazonaws.com/)
- 배포링크에 연결된 api는 서버리스로 구축한 api입니다. AWS API Gateway, AWS lambda를 활용였습니다. [API 링크](https://r41l4j5h2a.execute-api.ap-northeast-2.amazonaws.com/)
