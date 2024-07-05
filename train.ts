//Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

function hasProperty(obj: object, prop: string): boolean {
  return obj.hasOwnProperty(prop);
}
console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
