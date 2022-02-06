<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3> <!-- 모달 헤더 -->
      <div slot="body">할 일을 입력하세요.</div>
      <span slot="footer" @click="showModal = false"> <!-- 모달 푸터 -->
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal";
export default {
  name: "TodoInput.vue",
  components: { Modal : Modal }, //모달 컴포넌트 등록
  data() {
    return {
      newTodoItem : '',
      showModal : false,
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !=="") {  //인풋 박스의 입력 값이 있을 때만 저장
        var item = this.newTodoItem && this.newTodoItem.trim(); //  인풋 박스에 입력된 텍스트의 앞뒤 공백 문자열 제거
        this.$emit('addTodo', item);
        this.clearInput();  // 인풋 박스 입력 값을 초기화 하는 메서드 호출
      } else {  // 인풋 박스의 입력값이 없을 때 모달 동작
        this.showModal = !this.showModal;
      }
    },
    // 디자인 패턴 : 단일 책임 원칙
    // 단일 책임 원칙이란 함수 하나가 하나의 기능만 담당하도록 설계하는 객체 지향 프로그래밍의 디자인 패턴
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
