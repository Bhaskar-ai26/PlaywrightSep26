/* import { test as setup } from "@playwright/test";
setup('Create database', async ({}) => {
    console.log("Creating database...");
}); */

export default async function globalSetup() {
    console.log("####Creating database...");
}