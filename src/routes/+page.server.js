import { getAnimals } from "$lib/server"
export const load = async () => {
    const animals = await getAnimals();
    return { animals };
}