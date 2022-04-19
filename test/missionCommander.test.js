const MissionCommander = require('./../app/missionCommander')

describe('Test para la clase missionCommander', () => {
  it('Crea un nuevo objeto', () => {
    const myMissionCommander = new MissionCommander('Woopa')
    expect(myMissionCommander.name).toBe('Woopa')
  })
})

describe('Esto es una suite de pruebas', () => {
  test('Caso de prueba 1', () => {
    const result = 1 + 2
    expect(result).toBe(3)
  })
})
