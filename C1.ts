function dec( proto, key ) {
  Object.defineProperty( proto, key, {
    get() {
      console.log( 'get' );
      return key;
    },

    set( value ) {
      console.log( 'set', value );
    },
  } );
}

export default class C1 {
  @dec
  foo: string;
}
