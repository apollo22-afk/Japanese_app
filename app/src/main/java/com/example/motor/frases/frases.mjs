import * as $io from "../gleam_stdlib/gleam/io.mjs";
import { CustomType as $CustomType } from "./gleam.mjs";

export class Food extends $CustomType {
  constructor(id, jp, traducao) {
    super();
    this.id = id;
    this.jp = jp;
    this.traducao = traducao;
  }
}

export class Drinkable extends $CustomType {
  constructor(id, jp, traducao) {
    super();
    this.id = id;
    this.jp = jp;
    this.traducao = traducao;
  }
}

export class Media extends $CustomType {
  constructor(id, jp, traducao) {
    super();
    this.id = id;
    this.jp = jp;
    this.traducao = traducao;
  }
}

export class Place extends $CustomType {
  constructor(id, jp, traducao) {
    super();
    this.id = id;
    this.jp = jp;
    this.traducao = traducao;
  }
}

export class Transport extends $CustomType {
  constructor(id, jp, traducao) {
    super();
    this.id = id;
    this.jp = jp;
    this.traducao = traducao;
  }
}

export class Eat extends $CustomType {}

export class Drink extends $CustomType {}

export class Go extends $CustomType {}

export class Read extends $CustomType {}

export class See extends $CustomType {}

export class Motion extends $CustomType {}

export class Walking extends $CustomType {}

export class Vehicule extends $CustomType {}

export class Flying extends $CustomType {}

export function can_use(verb, noun) {
  if (verb instanceof Eat) {
    if (noun instanceof Food) {
      return true;
    } else {
      return false;
    }
  } else if (verb instanceof Drink) {
    if (noun instanceof Drinkable) {
      return true;
    } else {
      return false;
    }
  } else if (verb instanceof Go) {
    if (noun instanceof Place) {
      return true;
    } else if (noun instanceof Transport) {
      return true;
    } else {
      return false;
    }
  } else if (verb instanceof Read) {
    if (noun instanceof Media) {
      return true;
    } else {
      return false;
    }
  } else if (verb instanceof See) {
    return true;
  } else if (noun instanceof Transport) {
    return true;
  } else {
    return false;
  }
}

export function get_jp_name(noun) {
  if (noun instanceof Food) {
    let jp = noun.jp;
    return jp;
  } else if (noun instanceof Drinkable) {
    let jp = noun.jp;
    return jp;
  } else if (noun instanceof Media) {
    let jp = noun.jp;
    return jp;
  } else if (noun instanceof Place) {
    let jp = noun.jp;
    return jp;
  } else {
    let jp = noun.jp;
    return jp;
  }
}

export function make_sentence(subject, verb, noun) {
  let $ = can_use(verb, noun);
  if ($) {
    let noun_name = get_jp_name(noun);
    if (verb instanceof Eat) {
      return ((subject + "は") + noun_name) + "を食べたい。";
    } else if (verb instanceof Drink) {
      return ((subject + "は") + noun_name) + "を飲みたい。";
    } else if (verb instanceof Go) {
      return ((subject + "は") + noun_name) + "へ行きたい。";
    } else if (verb instanceof Read) {
      return ((subject + "は") + noun_name) + "を読みたい。";
    } else if (verb instanceof See) {
      return ((subject + "は") + noun_name) + "を見たい。";
    } else {
      return ((subject + "は") + noun_name) + "へ行きたい。";
    }
  } else {
    return "❌ combinação inválida";
  }
}

export function main() {
  let subject = "私";
  let ramen = new Food(1, "ラーメン", "lamen");
  let school = new Place(1, "学校", "escola");
  let car = new Transport(1, "車", "carro");
  let eat_verb = new Eat();
  let go_verb = new Go();
  let motion_verb = new Motion();
  $io.println(make_sentence(subject, eat_verb, ramen));
  $io.println(make_sentence(subject, go_verb, school));
  $io.println(make_sentence(subject, go_verb, car));
  $io.println(make_sentence(subject, motion_verb, car));
  return $io.println(make_sentence(subject, motion_verb, school));
}
