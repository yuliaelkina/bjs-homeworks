const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map((weapon) => {
    return weapon.name;
  });
};

function getCountReliableWeapons(durability) {
 const reliableWeapon = weapons.filter(weapon => 
    weapon.durability > durability);
     return reliableWeapon.length;  
};

function hasReliableWeapons(durability) {
  return weapons.some(weapon => weapon.durability > durability);
};

function getReliableWeaponsNames(durability) {
  const reliableWeapon = weapons.filter(weapon => 
    weapon.durability > durability);
  return reliableWeapon.map(weapon => weapon.name);
};

function getTotalDamage() {
  return weapons.reduce((acc, weapon) => {return acc + weapon.attack}, 0);
};