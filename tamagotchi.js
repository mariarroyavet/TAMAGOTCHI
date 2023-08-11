//------DOM manipulation----------

const buttonSleep = document.getElementById("buttonSleep");
const buttonPlay = document.getElementById("buttonPlay");
const buttonEat = document.getElementById("buttonEat");
const petImage = document.getElementById("petImage");
const petMessage = document.getElementById("petMessage");
const petEnergy = document.getElementById("energyLevel");



function initPet(pet) {
  const petName = pet;
  let energy = 100;
  let age = 0;
  let status = "";
  
  petEnergy.textContent = `Energy:${energy}`;

  return {
    sleep: function () {
      if (energy <= 80) {
        petImage.src = "./assets/pepa_sleeping.gif"; //Agregar imagen dormida
        petMessage.textContent = `${petName} is sleeping`;
        status = "sleeping";
        age++;
        energy += 20;
        petEnergy.textContent = `Energy: ${energy}`;
    
        return {
          energy,
          age,
          status,
        };
      } else if (status === "sleeping") {
        petImage.src = "./assets/pepa.gif";
        petMessage.textContent = "I just slept";
        petEnergy.textContent = `Energy:${energy}`;
        return energy;
      } else {
        petImage.src = "./assets/pepa.gif";
        petMessage.textContent = "I don't need to sleep";
        petEnergy.textContent = `Energy:${energy}`;
        return energy;
      }
    },
    play: function () {
      if (energy > 10) {
        petImage.src = "./assets/pepa_playing.gif";
        petMessage.textContent = `${petName} is jumping`;
        status = "running";
        age++;
        energy = energy - 30;
        petEnergy.textContent = `Energy:${energy}`;
        return {
          energy,
          age,
          status,
        };
      } else if (energy <= 10) {
        petImage.src = "./assets/pepa_dead.gif";
        petMessage.textContent = "Pepa is dead x_x";
      }
    },
    eat: function () {
      if (status !== "eating" && energy <= 90) {
        petImage.src = "./assets/pepa_eating.gif";
        petMessage.textContent = `${petName} is eating`;
        status = "eating";
        age++;
        energy = energy + 10;
        petEnergy.textContent = `Energy:${energy}`;
        return {
          energy,
          age,
          status,
        };
      } else if (energy <= 90) {
        petImage.src = "./assets/pepa.gif";
        petMessage.textContent = "I'm full";
        petEnergy.textContent = `Energy:${energy}`;
        return energy;
      } else {
        petImage.src = "./assets/pepa.gif";
        petMessage.textContent = "I just ate";
        petEnergy.textContent = `Energy:${energy}`;
        return energy;
      }
    },
    die: function() {
        if (energy <=10) {
        petImage.src = "./assets/pepa_dead.gif";
        petMessage.textContent = `${petName} is dead`;
        status = "Bacon";
        }
        return{
            energy,
            age,
            status,
        };
    },
  };
}

const myPet = initPet("Pepa");


buttonSleep.addEventListener('click',()=>myPet.sleep());
buttonPlay.addEventListener('click',()=>myPet.play());
buttonEat.addEventListener('click',()=>myPet.eat());

/*setInterval(() => {
    energy = energy -1;
    petEnergy.textContent = `Energy ${energy}`
},2000);*/
