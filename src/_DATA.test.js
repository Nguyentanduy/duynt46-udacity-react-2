import { _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA"

describe('getUsers', () => {
    it('returns users data after a delay', async () => {
      jest.useFakeTimers();
  
      const usersData = { user1: { name: 'User 1' }, user2: { name: 'User 2' } };
      const usersPromise = _getUsers();
  
      expect(setTimeout).toHaveBeenCalledTimes(1);
  
      jest.runAllTimers();
  
      const resolvedUsers = await usersPromise;
  
      expect(resolvedUsers).toEqual(usersData);
    });
  });

describe('saveQuestion', () => {
    it('return saved question and all expected field are populated', async () => {
        const questionParameter = {
            optionOneText : "option1", 
            optionTwoText: "option2",
            author:"author"
        }
        const result = await _saveQuestion(questionParameter)
        expect(result.optionOne.text).toEqual('option1')
        expect(result.optionTwo.text).toEqual('option2')
        expect(result.author).toEqual('author')
  
    })

    it('return an error if inconsitent data is passed to the function', async() => {
        const inconsistentQuestionParameter = {
            optionOneText: 'option1',
            optionTwoText: 'option2'}
        await expect(_saveQuestion(inconsistentQuestionParameter)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')

    })
})

describe('saveQuestionAnswer',  () => {
    it('return true if correctly formated data is passed to the function', async() => {
        const authedUser = 'sarahedo'
        const qid = '8xf0y6ziyjabvozdd253nd'
        const answer = 'optionOne'
        const promise = await _saveQuestionAnswer({authedUser, qid, answer})
        const result = await promise;
        expect(result).toBe(true);
    })
    it('return error if there is invalid input data', async() => {
        const qid = '8xf0y6ziyjabvozdd253nd'
        const answer = 'optionOne'
        await expect(_saveQuestionAnswer({ qid, answer})).rejects.toBe('Please provide authedUser, qid, and answer');

    })
})

describe('formatQuestion', () => {
    it('formats a question object correctly', () => {
      const optionOneText = 'Option One Text';
      const optionTwoText = 'Option Two Text';
      const author = 'user123';
  
      const formattedQuestion = formatQuestion({ optionOneText, optionTwoText, author });
  
      expect(formattedQuestion).toHaveProperty('id', expect.any(String));
      expect(formattedQuestion).toHaveProperty('timestamp', expect.any(Number));
      expect(formattedQuestion).toHaveProperty('author', author);
  
      expect(formattedQuestion).toHaveProperty('optionOne');
      expect(formattedQuestion.optionOne).toHaveProperty('votes', []);
      expect(formattedQuestion.optionOne).toHaveProperty('text', optionOneText);
  
      expect(formattedQuestion).toHaveProperty('optionTwo');
      expect(formattedQuestion.optionTwo).toHaveProperty('votes', []);
      expect(formattedQuestion.optionTwo).toHaveProperty('text', optionTwoText);
    });
  
    it('generates a unique ID for each question', () => {
      const question1 = formatQuestion({
        optionOneText: 'Option One 1',
        optionTwoText: 'Option Two 1',
        author: 'user1',
      });
  
      const question2 = formatQuestion({
        optionOneText: 'Option One 2',
        optionTwoText: 'Option Two 2',
        author: 'user2',
      });
  
      expect(question1.id).not.toBe(question2.id);
    });
  });