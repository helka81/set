import Character, { Team } from '../index.js';

describe('Team', () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    it('should add a character to the team', () => {
        const character = new Character('Alice');
        team.add(character);

        expect(team.members.size).toBe(1);
    });

    it('should not allow adding the same character to the team twice', () => {
        const character = new Character('Alice');
        team.add(character);

        expect(() => {
            team.add(character);
        }).toThrow('This character is already in the team');
    });

    it('should add multiple characters to the team', () => {
        const character1 = new Character('Alice');
        const character2 = new Character('Bob');
        team.addAll(character1, character2);

        expect(team.members.size).toBe(2);
    });

    it('should not allow adding the same characters to the team multiple times', () => {
        const character = new Character('Alice');

        expect(() => {
            team.addAll(character, character);
        }).toThrow('This character is already in the team');
    });

    it('should convert team members set to array', () => {
        const character1 = new Character('Alice');
        const character2 = new Character('Bob');
        team.addAll(character1, character2);

        const membersArray = team.toArray();
        expect(membersArray).toEqual([character1, character2]);
    });
});
