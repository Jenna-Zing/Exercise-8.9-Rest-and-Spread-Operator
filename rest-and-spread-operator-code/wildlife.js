/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackAnimalSightings(...animals) {
  console.log("Animal Sightings: ", animals);
}

console.log(
  "Task 1: Track Animal Sightings - use rest operator to handle variable amount of arguments in function\n"
);
trackAnimalSightings(); // calling with 0 arguments
trackAnimalSightings(
  "Cheetah",
  "Lion",
  "Leopard",
  "Gazelle",
  "Zebra",
  "Hyena",
  "Elephant"
); // calling with a random amount of arguments

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
console.log(
  "\n\nTask 2: Merge Habitat Areas - given two arrays of data, use spread operator to combine that list into one\n"
);
console.log(
  "forestHabitats",
  forestHabitats,
  "savannahHabitats",
  savannahHabitats
);
const combinedHabitats = [...forestHabitats, ...savannahHabitats];
console.log("Combined Habitats: ", combinedHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
console.log(
  "\n\nTask 3: Update Conservation Status - use spread operator to update the object with new info by overwriting the properties\n"
);
const updatedRhinoStatus = {
  ...rhinoStatus,
  population: 235,
  status: "Critically Endangered",
};
console.log(
  "rhinoStatus === updatedRhinoStatus",
  rhinoStatus === updatedRhinoStatus
);
console.log("Original Rhino Status: ", rhinoStatus);
console.log("Updated Rhino Status: ", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
console.log(
  "\n\nTask 4: Catalog Genetic Diversity - Duplicate an animal profile object using a shallow copy and add a new property to the copy\n"
);
const lionGeneticProfile = {
  ...lionProfile,
  genetics: "Diverse",
};
console.log("Original Lion Profile: ", lionProfile);
console.log("Lion Genetic Profile: ", lionGeneticProfile);
/*
 * Observations:
 * 1. The `lionProfile` object is shallow-copied using the spread operator (`...`).
     This creates a **new object with a new reference** in memory. In other words, `lionGeneticProfile !== lionProfile`.

  2. The spread operator copies **all top-level properties** of `lionProfile` into the new object.
     - If a property is a **primitive value** (like a string or number), it is **copied by value** — a true, independent copy.
     - If a property is a **reference type** (like an object or array), only the **reference is copied** — the original and copy both point to the **same nested data in memory**.

  3. In this specific example, all properties in `lionProfile` are primitive types (`name`, `age`, `species`),
     so the shallow copy behaves just like a deep copy — no shared references exist between `lionProfile` and `lionGeneticProfile`.

  4. A new top-level property, `genetics`, is added to `lionGeneticProfile`. This does **not** affect `lionProfile`,
     because we're modifying a property that exists only on the shallow copy, not shared data.

  5. Warning: If `lionProfile` had nested objects (e.g., `traits: { strength: 90 }`), then changes to those nested properties
     on `lionGeneticProfile` would **also appear in `lionProfile`**, because they would both reference the same nested object.

  💡 Conclusion:
     - The spread operator (`...`) creates a **shallow copy**: it copies top-level properties into a new object.
     - Primitive values are **copied by value**, while objects and arrays are **copied by reference**.
     - For deep copies (full duplication of all levels), you need a different approach.

	  TLDR:  In this Task #4, the spread operator creates a shallow copy of the object and we added another property in the copied object 
	  (and it did not affect the original).  This means that top-level properties are duplicated and assigned new memory space (if they 
	  are primitives; However, if they're non-primitives like an array or object, then it's only shallowly-copied and since they share 
	  the same reference, we'd see modifications in both the original and "copy").
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
console.log(
  "\n\nTask 5: Analyze Ecosystem Health - shallow copy an object and modify a nested property\n"
);
const updatedEcosystemHealth = {
  ...ecosystemHealth,
  foodSupply: { ...ecosystemHealth.foodSupply, carnivores: "Extremely Low" },
};
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Updated Ecosystem Health:", updatedEcosystemHealth);
console.log(
  "originalEcosystemHealth === updatedEcosystemHealth -> ",
  ecosystemHealth === updatedEcosystemHealth
);
console.log(
  "originalEcosystemHealth food supply === updatedEcosystemHealth food supply -> ",
  ecosystemHealth.foodSupply === updatedEcosystemHealth.foodSupply
);
/*
 * Observations:
 * 1. In this example, we perform a shallow copy of the `ecosystemHealth` object using the spread operator in an object literal.
 *    This creates a new top-level object where `updatedEcosystemHealth !== ecosystemHealth`.
 *
 * 2. However, instead of copying the `foodSupply` property directly (which is a nested object),
 *    we also explicitly create a **new shallow copy** of `foodSupply` using:
 *    `foodSupply: { ...ecosystemHealth.foodSupply, carnivores: "Extremely Low" }`
 *
 *    This ensures that:
 *    - `updatedEcosystemHealth.foodSupply !== ecosystemHealth.foodSupply` (they point to different objects),
 *    - and updating `carnivores` does not affect the original `ecosystemHealth` object.
 *
 * 3. This avoids a common shallow copy pitfall:
 *    If we had done this instead:
 *
 *    ```
 *    const badCopy = { ...ecosystemHealth };
 *    badCopy.foodSupply.carnivores = "Critically Endangered";
 *    console.log(ecosystemHealth.foodSupply.carnivores); // Modified!
 *    ```
 *
 *    ...we would have accidentally mutated the original, because the nested `foodSupply` object is copied **by reference** in a shallow copy.
 *
 * 💡 Conclusion:
 * - The spread operator only performs a **shallow copy**.
 * - If an object contains nested structures (objects, arrays), you must explicitly copy those as well if you want full separation.
 * - This pattern (`...outerObj, nestedKey: { ...outerObj.nestedKey, changes }`) is a safe way to update nested data **immutably**
 *   (immutably means you don’t change the original object/array — instead, you create a new copy with the changes) - which is what we did here.
 */
