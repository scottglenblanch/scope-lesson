const punctuation = '!';

(function startEverything() {
  function getGreetingFunction(greeting) {
    function nameFirstFunction() {
      alert(greeting + ' ' + name + punctuation);
    }

    function nameLastFunction() {
      alert(name + ' ' + greeting);
    }

    if(greeting === 'Klingong') {
      return nameLastFunction;
    } else {
      return nameFirstFunction;
    }

  }

  function sayHelloInManyLanguages() {
    const greetingList = [
      'Hello',
      'Hola',
      'Bonjour',
      'Klingong'
    ];

    greetingList.forEach(greeting => {
      const greetingFn = getGreetingFunction(greeting);
      greetingFn(name);
    });
  }

  const name = prompt('what is your name');

  document
    .querySelector('button')
    .addEventListener(
      "click", sayHelloInManyLanguages
    );
})();
