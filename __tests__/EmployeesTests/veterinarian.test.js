import Parrot from '../../src/Animals/Bird/Parrot'
import Penguin from '../../src/Animals/Bird/Penguin'
import Bison from '../../src/Animals/Mammal/Bison'
import Veterinarian from '../../src/Employees/Veterinarian'
import Antibiotics from '../../src/Medicines/Antibiotics'

const veterinarian = new Veterinarian('Jake', 'Last', ['Turtle', 'Snake', 'Parrot'])

describe('ZooKeeper tests', () => {
  test('create Veterinarian', () => {
    expect(veterinarian.FirstName).toBe('Jake')
    expect(veterinarian.LastName).toBe('Last')
    expect(veterinarian.AnimalExperience).toContain('Turtle', 'Snake', 'Parrot')
  })

  test('heal animal', () => {
    const parrot = new Parrot()
    parrot.Sick = true
    parrot.NeededMedicine = Antibiotics
    expect(veterinarian.HealAnimal(parrot)).toEqual(true)
  })

  test('heal unknown animal', () => {
    const bison = new Bison()
    bison.Sick = true
    bison.NeededMedicine = Antibiotics
    expect(veterinarian.HealAnimal(bison)).toEqual(false)
  })


  test('add animal experience', () => {
    veterinarian.AddAnimalExperience(new Bison())
    expect(veterinarian.AnimalExperience).toContain('Bison')
  })

  test('check false animal experience', () => {
    expect(veterinarian.HasAnimalExperience(new Penguin())).toBeFalsy()
  })
})
