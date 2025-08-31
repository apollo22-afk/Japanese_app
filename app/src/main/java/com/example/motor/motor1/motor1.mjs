import * as $string from "../gleam_stdlib/gleam/string.mjs";
import { Ok, CustomType as $CustomType } from "./gleam.mjs";

export class Godan extends $CustomType {}

export class Ichidan extends $CustomType {}

export class Irregular extends $CustomType {}

export class Verb extends $CustomType {
  constructor(base, group) {
    super();
    this.base = base;
    this.group = group;
  }
}

export class Dictionary extends $CustomType {}

export class Nai extends $CustomType {}

export class Potential extends $CustomType {}

export class Causative extends $CustomType {}

export class Passive extends $CustomType {}

export class PassiveCausative extends $CustomType {}

export class Conditional extends $CustomType {}

export class Ta extends $CustomType {}

export class Te extends $CustomType {}

export function irregular(base, form) {
  if (base === "する") {
    if (form instanceof Dictionary) {
      return "する";
    } else if (form instanceof Nai) {
      return "しない";
    } else if (form instanceof Potential) {
      return "できる";
    } else if (form instanceof Causative) {
      return "させる";
    } else if (form instanceof Passive) {
      return "される";
    } else if (form instanceof PassiveCausative) {
      return "させられる";
    } else if (form instanceof Conditional) {
      return "すれば";
    } else if (form instanceof Ta) {
      return "した";
    } else {
      return "して";
    }
  } else if (base === "くる") {
    if (form instanceof Dictionary) {
      return "くる";
    } else if (form instanceof Nai) {
      return "こない";
    } else if (form instanceof Potential) {
      return "こられる";
    } else if (form instanceof Causative) {
      return "こさせる";
    } else if (form instanceof Passive) {
      return "こられる";
    } else if (form instanceof PassiveCausative) {
      return "こさせられる";
    } else if (form instanceof Conditional) {
      return "くれば";
    } else if (form instanceof Ta) {
      return "きた";
    } else {
      return "きて";
    }
  } else if (base === "ある") {
    if (form instanceof Dictionary) {
      return "ある";
    } else if (form instanceof Nai) {
      return "ない";
    } else if (form instanceof Potential) {
      return "あり得る";
    } else if (form instanceof Causative) {
      return "あらせる";
    } else if (form instanceof Passive) {
      return "あられる";
    } else if (form instanceof PassiveCausative) {
      return "あらせられる";
    } else if (form instanceof Conditional) {
      return "あれば";
    } else if (form instanceof Ta) {
      return "あった";
    } else {
      return "あって";
    }
  } else {
    return base;
  }
}

export function drop_last(base) {
  let len = $string.length(base);
  return $string.slice(base, 0, len - 1);
}

export function ichidan_rule(base, form) {
  if (form instanceof Dictionary) {
    return base;
  } else if (form instanceof Nai) {
    return drop_last(base) + "ない";
  } else if (form instanceof Potential) {
    return drop_last(base) + "られる";
  } else if (form instanceof Causative) {
    return drop_last(base) + "させる";
  } else if (form instanceof Passive) {
    return drop_last(base) + "られる";
  } else if (form instanceof PassiveCausative) {
    return drop_last(base) + "させられる";
  } else if (form instanceof Conditional) {
    return drop_last(base) + "れば";
  } else if (form instanceof Ta) {
    return drop_last(base) + "た";
  } else {
    return drop_last(base) + "て";
  }
}

function last_char(base) {
  let $ = $string.last(base);
  if ($ instanceof Ok) {
    let c = $[0];
    return c;
  } else {
    return "";
  }
}

function to_a(kana) {
  if (kana === "く") {
    return "か";
  } else if (kana === "ぐ") {
    return "が";
  } else if (kana === "む") {
    return "ま";
  } else if (kana === "ぶ") {
    return "ば";
  } else if (kana === "ぬ") {
    return "な";
  } else if (kana === "る") {
    return "ら";
  } else if (kana === "す") {
    return "さ";
  } else if (kana === "つ") {
    return "た";
  } else if (kana === "う") {
    return "わ";
  } else {
    return kana;
  }
}

function to_e(kana) {
  if (kana === "く") {
    return "け";
  } else if (kana === "ぐ") {
    return "げ";
  } else if (kana === "む") {
    return "め";
  } else if (kana === "ぶ") {
    return "べ";
  } else if (kana === "ぬ") {
    return "ね";
  } else if (kana === "る") {
    return "れ";
  } else if (kana === "す") {
    return "せ";
  } else if (kana === "つ") {
    return "て";
  } else if (kana === "う") {
    return "え";
  } else {
    return kana;
  }
}

function ta_form(kana) {
  if (kana === "う") {
    return "った";
  } else if (kana === "つ") {
    return "った";
  } else if (kana === "る") {
    return "った";
  } else if (kana === "す") {
    return "した";
  } else if (kana === "く") {
    return "いた";
  } else if (kana === "ぐ") {
    return "いだ";
  } else if (kana === "ぬ") {
    return "んだ";
  } else if (kana === "ぶ") {
    return "んだ";
  } else if (kana === "む") {
    return "んだ";
  } else {
    return kana;
  }
}

function te_form(kana) {
  if (kana === "う") {
    return "って";
  } else if (kana === "つ") {
    return "って";
  } else if (kana === "る") {
    return "って";
  } else if (kana === "す") {
    return "して";
  } else if (kana === "く") {
    return "いて";
  } else if (kana === "ぐ") {
    return "いで";
  } else if (kana === "ぬ") {
    return "んで";
  } else if (kana === "ぶ") {
    return "んで";
  } else if (kana === "む") {
    return "んで";
  } else {
    return kana;
  }
}

export function godan_rule(base, form) {
  let last = last_char(base);
  if (form instanceof Dictionary) {
    return base;
  } else if (form instanceof Nai) {
    return (drop_last(base) + to_a(last)) + "ない";
  } else if (form instanceof Potential) {
    return (drop_last(base) + to_e(last)) + "る";
  } else if (form instanceof Causative) {
    return (drop_last(base) + to_a(last)) + "せる";
  } else if (form instanceof Passive) {
    return (drop_last(base) + to_a(last)) + "れる";
  } else if (form instanceof PassiveCausative) {
    return (drop_last(base) + to_a(last)) + "さられる";
  } else if (form instanceof Conditional) {
    return (drop_last(base) + to_e(last)) + "ば";
  } else if (form instanceof Ta) {
    return drop_last(base) + ta_form(last);
  } else {
    return drop_last(base) + te_form(last);
  }
}

export function conjugate(v, form) {
  let $ = v.group;
  if ($ instanceof Godan) {
    return godan_rule(v.base, form);
  } else if ($ instanceof Ichidan) {
    return ichidan_rule(v.base, form);
  } else {
    return irregular(v.base, form);
  }
}

export function group_from_string(s) {
  let $ = $string.lowercase(s);
  if ($ === "Godan") {
    return new Godan();
  } else if ($ === "Ichidan") {
    return new Ichidan();
  } else if ($ === "Irregular") {
    return new Irregular();
  } else {
    return new Ichidan();
  }
}

export function conjugation_from_string(s) {
  let $ = $string.lowercase(s);
  if ($ === "Dictionary") {
    return new Dictionary();
  } else if ($ === "Nai") {
    return new Nai();
  } else if ($ === "Potential") {
    return new Potential();
  } else if ($ === "Causative") {
    return new Causative();
  } else if ($ === "Passive") {
    return new Passive();
  } else if ($ === "PassiveCausative") {
    return new PassiveCausative();
  } else if ($ === "Conditional") {
    return new Conditional();
  } else if ($ === "Ta") {
    return new Ta();
  } else if ($ === "Te") {
    return new Te();
  } else {
    return new Dictionary();
  }
}

// Função simples: recebe strings e monta os objetos certos
export function conjugate_simple(baseStr, groupStr, formStr) {
  const group = group_from_string(groupStr);      // Ex: "Ichidan" -> new Ichidan()
  const form = conjugation_from_string(formStr);  // Ex: "Nai" -> new Nai()
  const verb = new Verb(baseStr, group);          // Cria o objeto verbo
  return conjugate(verb, form);                   // Chama o motor principal
}


