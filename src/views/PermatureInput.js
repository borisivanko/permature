import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import Navbar from '../components/Navbar';

const PermatureInput = () => {
  const {currentUser} = useAuth();

  const [inputValue, setInputValue] = useState({
    content: '',
    signature: '',
    email: currentUser.email,
  });

  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.content.length < 201 && inputValue.signature.length < 21) {
      try {
        const response = await fetch(
          'https://permature.borisivanko.sk/api/create-new-permature',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputValue),
          }
        );
        setError('');
        history.push('/');
      } catch (error) {
        setError('Publishing Permature failed');
        console.error(error.message);
      }
    } else {
      setError('You exceeded maximum length of content or signature');
    }
  };

  return (
    <>
      <Navbar/>
      <main>
        <div className='container input'>
          <h1>Create new Permature</h1>
          {error && <div className='error error-add'>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Content</h2>
              <input
                type='text'
                value={inputValue.content}
                onChange={(e) =>
                  setInputValue({...inputValue, content: e.target.value})
                }
                required
              />
              <div className='limit'>
								<span
                  className={inputValue.content.length > 200 && 'limit-error'}
                >
									{inputValue.content.length}
								</span>{' '}
                / 200
              </div>
            </div>
            <div>
              <h2>Signature</h2>
              <input
                type='text'
                value={inputValue.signature}
                onChange={(e) =>
                  setInputValue({...inputValue, signature: e.target.value})
                }
                required
              />
              <div className='limit'>
								<span
                  className={inputValue.signature.length > 20 && 'limit-error'}
                >
									{inputValue.signature.length}{' '}
								</span>
                / 20
              </div>
            </div>
            <div className='center'>
              <button type='submit'>Publish</button>
            </div>
          </form>

          <section className='preview'>
            <article className='permature'>
              <p>{inputValue.content || 'Content Preview'}</p>
              <div className='signature-wrapper'>
								<span className='signature'>
									{inputValue.signature || 'Signature preview'}
								</span>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default PermatureInput;
