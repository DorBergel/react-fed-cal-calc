import idb from "./idb";

async function test() {
    const db = await idb.openCaloriesDB("caloriesdb",4);
    const result1 =
        await idb.addCalories({calorie:200,category:"LUNCH",
            description:"glass of milk"});
    const result2 =
        await idb.addCalories({calorie:300,category:"LUNCH",
            description:"pizza slice"});
    if(db) {
        console.log("creating db succeeded");
    }
    if(result1) {
        console.log("adding 1st cost succeeded");
    }
    if(result2) {
        console.log("adding 2nd cost succeeded");
    }
    const res = await idb.getCalories();
    if(res){
        console.log("get success -> " + res);
    }
}


export default function Idbtest(){
    test();
    return (
        <div>
            <h1>IndexedDB test</h1>
        </div>
    );
}