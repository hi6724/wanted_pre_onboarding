# 프리온보딩의 선발과제입니다
스타일은 모두 styled-compoenents를 사용하였습니다.

styled-components를 사용한 가장 큰 이유는, props를 넘겨 스타일을 동적으로 제어하기가 가장 쉽다고 생각했기 때문입니다.
## Toggle.js
`Toggle` 은 먼저 큰 `div` 를 만들고 그 안에 기본 과 상세를 두었습니다. 
그리고 흰색의 `div` 를 `absoulute` 로 만들어 선택된 `state` 만큼 이동하게 만들었습니다.
```javascript
<Container>
      <WhiteBox select={select}></WhiteBox>
      <ButtonContainer select={select === 1} onClick={() => setSelect(1)}>
        기본
      </ButtonContainer>
      <ButtonContainer select={select === 2} onClick={() => setSelect(2)}>
        상세
      </ButtonContainer>
</Container>
```
## Tab
`Tab` 은 `Toggle`과 비슷한 맥락으로 만들었습니다.

스타일을 조금 다르게 한점과, 메뉴가 2개에서 3개로 변한 점 이외에는 달라진 점이 없습니다.

## Slider
`Slider`는 구현하는데 가장 많은 시간을 쓴 것 같습니다.

처음에는 `input` 태그를 이용해서 만들었지만, 이건 구현했다고 말할 수 있나? 라는 의문감이 들었습니다.

그래서 `div`만으로 구현 해 보았습니다.

`onClick`이벤트로는 드래그할 때 반응하지 않아, `mousedown`과`drag`할 시 `Slider`의 `state`를 변하게 하였습니다.
### 잘한점✨
개인적으로 `input` 태그를 사용하지 않고 `Slider`를 구현한게 처음이었는데, 만족스러웠습니다.

그리고, 1%,25%,50%,75%,100% 로 이동하는 버튼은 리렌더링이 될 필요가 없기에 `useCallback`을 공부해서 적용시킨 점이 만족스럽습니다.
### 어려웠던점💣
`Slider`특성상 `state`가 아주 자주 바뀌는데, 그 때마다 리렌더링 되는게 비효율적인가 란 생각을 했습니다.

어떻게 하면 리렌더링을 줄일 수 있는지 고민했습니다.

픽셀을 맞추는 작업도 어려웠습니다. 막대의 길이 뿐 아니라, 막대위를 움직이는 원의 길이 또한 생각해야 했기 때문에, 이점도 어려웠던 부분입니다.

## Input
`Input`은 평상시에는 `react-hook-form`이나 `formik`을 자주 사용했는데, 직접 구현하려니 조금 껄끄러웠습니다.

우선 `input`태그의 값이 바뀔때마다, `state`를 변경해 주었고, 그 때 마다 값을 변경해 주었습니다
### 잘한점✨
`InputGenerator`라는 컴포넌트를 만들어 재활용이 가능하게 만들었다.
```javascript
<InputGenerator
        value={useMemo(() => email, [email])}
        handleChange={handleChangeEmail}
        Icon={EmailIcon}
        type="email"
        id="E-mail"
      />
```
`useMemo`를 이용해서 `password`가 바뀔때 `email`이 리렌더링 되는 일을 방지하였다
### 어려웠던점💣
재활용가능하게 컴포넌트를 만들면서 리렌더링을 최적화하는점이 어려웠습니다.

예를들면 `password` 같은경우 `Icon`이 리렌더링 될 필요가 없지만, `email`인경우 값이 바뀔 때 마다 체크한후에 `Icon`의 색을 변경해 줘야 한다는 점이 있습니다.

## Dropdown
`show`의 초기값을 `false`로 설정하고, `true` 이면 보여지고 아니면 숨기게 하였습니다.

검색기능은, `filter`를 사용해서 통과하는 것만 보여주게 하였습니다.

### 잘한 점✨
검색을 할 때, 대문자 소문자를 구별하지 않고 검색이 가능하게 하였습니다.
### 어려웠던 점💣
어려웠던 점 이라기 보다는 아쉬운 점이 있습니다. 이번 예시는 데이터가 적었지만, 아주 많은 수의 데이터가 있을 때는 `pagination`이 필수적일 텐데, 그 점을 구현하지 못한 점이 아쉬움에 남습니다. 시간이 있다면, 구현하고 싶습니다
