import idb from "./idb";

async function test() {
    const db = await idb.openCaloriesDB("caloriesdb", 4);

    // Add ten more calorie entries for different years and months
    await idb.addCalories({
        calorie: 2000,
        category: "Breakfast",
        description: "5",
        month: 3,
        year: 2023
    });

    await idb.addCalories({
        calorie: 2500,
        category: "Lunch",
        description: "6",
        month: 6,
        year: 2022
    });

    await idb.addCalories({
        calorie: 1800,
        category: "Dinner",
        description: "7",
        month: 9,
        year: 2024
    });

    await idb.addCalories({
        calorie: 2200,
        category: "Other",
        description: "8",
        month: 8,
        year: 2023
    });

    await idb.addCalories({
        calorie: 1900,
        category: "Breakfast",
        description: "9",
        month: 5,
        year: 2022
    });

    await idb.addCalories({
        calorie: 2100,
        category: "Lunch",
        description: "10",
        month: 11,
        year: 2023
    });

    await idb.addCalories({
        calorie: 2400,
        category: "Dinner",
        description: "11",
        month: 7,
        year: 2022
    });

    await idb.addCalories({
        calorie: 2300,
        category: "Breakfast",
        description: "12",
        month: 2,
        year: 2024
    });

    await idb.addCalories({
        calorie: 2600,
        category: "Lunch",
        description: "13",
        month: 10,
        year: 2022
    });

    await idb.addCalories({
        calorie: 2000,
        category: "Dinner",
        description: "14",
        month: 4,
        year: 2023
    });

    // Add more entries as needed
}



export default function InitDB(){
    test();
    return (
        <div>
            <h1>IndexedDB Init</h1>
        </div>
    );
}