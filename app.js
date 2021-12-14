class Character {
  constructor(name, hp){
    this.name = name;
    this.hp = hp;
  }

  attack(){
    console.log(this.name + 'の攻撃!');
  }
}

