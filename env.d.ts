declare module '*.vue' {
  import vue from 'vue';

  export default vue;
}

declare module '@vue/runtime-dom' {
  type ReservedProps = {
    key?: string | number | symbol;
  };
}
