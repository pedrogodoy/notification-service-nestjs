import { Content } from "./content";

describe('Notification Content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitaçào');
  
    expect(content).toBeTruthy();
  });
  
  test('it should not be able to create a notification content with less than five characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });
  
  test('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('aaa'.repeat(240))).toThrow();
  });
});

