class Character{
  constructor(name,hp){
    this.name = name;
    this.hp = hp;
  }
}


class Hero extends Character{
  constructor(name, hp, exp){

    //継承元のプロパティにアクセス(名前・HPの値をセット)
    super(name, hp);

    this.exp = exp;


  }
}


const hero = new Hero('主人公',100,10);

console.log(hero);
