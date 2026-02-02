function woodQuantity(chair,table,bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    
    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood


    const totalWood = allChairWood+allTableWood+allBedWood;

    return totalWood;
}


console.log(woodQuantity(23,34,6))