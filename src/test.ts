import { Person } from "./entity/Person";

async function test() {
  try {
    const p = new Person();
    p.name = "Sam";
    await p.save();
  } catch (error) {
    console.log(error);
  }
}

test();
