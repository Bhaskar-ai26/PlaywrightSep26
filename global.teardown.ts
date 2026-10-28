/* import { test as teardown } from "@playwright/test";
teardown('Drop database', async ({}) => {
    console.log("Dropping database...");
});  */
export default async function globalTeardown() {
    console.log("####Dropping database...");
}