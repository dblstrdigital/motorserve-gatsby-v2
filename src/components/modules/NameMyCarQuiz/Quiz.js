import React, {
  useState,
  // useRef
} from 'react';
import { useForm } from 'react-hook-form';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Link } from 'gatsby';
import { questions, rawData, getData } from '@data/quiz-data';
import { Box, Text, Button } from 'rebass';
import CustomButton from '../../global/Button';
import LandingPanel, { landingHeadingStyles } from './LandingPage';
import QuestionPanel, {
  AnswerSet as FirstQuestion,
  AnswerColorSet as SecondQuestion,
  AnswerSet as ThirdQuestion,
  AnswerSet as FourthQuestion,
  AnswerSet as FifthQuestion,
  RadioContainer,
  RadioColorContainer,
  radioInputStyles,
  radioColorInputStyles,
  questionStyles,
} from './QuestionPage';
import {
  NumberPlate,
  CustomerFormPanel,
  // FormInputItem,
  // FormCheckboxItem,
  // SelectWrapper,
  // HiddenFormInputs,
  // storesByRegion,
  ShareToWinPanel,
  ThankYouPanel,
  textStyles,
  headingStyles,
  disclaimerStyles,
  tcStyles,
  // iconButtonStyles,
  // iconContainerStyles,
  // srOnly,
} from './ResultPage';

import { slugify } from '@util/helpers';
import { FacebookShareButton } from 'react-share';
import {
  ButtonFlex,
  prevButtonStyles,
  nextButtonStyles,
  // shareButtonStyles,
  singleButtonStyles,
  singleShareButtonStyles,
} from './Global';
// import { nominalTypeHack } from 'prop-types';

const getQuestion = (idToSearch) => {
  return questions.find((x) => x.id === idToSearch);
};

const getResult = (Data, answers) => {
  const filterBy = [answers[1].answer, answers[3].answer, answers[4].answer];
  return Data.indexOf(
    Data.find(
      (x) =>
        x.filterAnswer[0] === filterBy[0] &&
        x.filterAnswer[1] === filterBy[1] &&
        x.filterAnswer[2] === filterBy[2]
    )
  );
};

const randomNumber = (max) => {
  var min = 0;
  return Math.floor(min + Math.random() * (max - min));
};

const initalAnswers = {
  answers: [
    {
      id: 0,
      title: 'How old is your car?',
      answer: null,
    },
    {
      id: 1,
      title: 'What colour is your car?',
      answer: null,
    },
    {
      id: 2,
      title: 'What’s your favourite car movie?',
      answer: null,
    },
    {
      id: 3,
      title: 'What is your car most used for?',
      answer: null,
    },
    {
      id: 4,
      title: 'What gender is your car?',
      answer: null,
    },
  ],
};

const renderQuestion = (
  step,
  currentAnswers,
  updateAnswers,
  setNextDisabled
) => {
  switch (step) {
    case 0:
      return (
        <FirstQuestion>
          <Text
            sx={{
              ...questionStyles,
              maxWidth: ['200px', '300px', 'none', 'none'],
            }}
          >
            How <Box as="span">old</Box> is your car?
          </Text>
          {questions[0].answers.map((answer, index) => (
            <RadioContainer
              key={index}
              answer={answer}
              qID={0}
              role="radiogroup"
              aria-labelledby="question-0"
            >
              <Box
                as={'input'}
                type="radio"
                role="radio"
                value={answer}
                sx={{ ...radioInputStyles }}
                name={`question-0`}
                id={`question-0-${slugify(answer)}`}
                checked={currentAnswers.answers[0].answer === answer}
                aria-checked={currentAnswers.answers[0].answer === answer}
                onChange={(e) => {
                  updateAnswers(0, answer);
                  setNextDisabled(false);
                }}
              />
              <Box
                as="img"
                src={`/images/name-my-car/radio-images/radio-image_1-${slugify(
                  answer
                )}.png`}
                loading="eager"
              />
            </RadioContainer>
          ))}
        </FirstQuestion>
      );
    case 1:
      return (
        <SecondQuestion>
          <Text
            sx={{ ...questionStyles, maxWidth: ['200px', '280px', '', 'none'] }}
          >
            What <Box as="span">colour</Box> is your car?
          </Text>
          {questions[1].answers.map((answer, index) => (
            <RadioColorContainer key={index} answer={answer} qID={1}>
              <Box
                as={'input'}
                type="radio"
                value={answer}
                sx={{ ...radioColorInputStyles }}
                name={`question-1`}
                id={`question-1-${slugify(answer)}`}
                checked={currentAnswers.answers[1].answer === answer}
                onChange={(e) => {
                  updateAnswers(1, answer);
                  setNextDisabled(false);
                }}
              />
            </RadioColorContainer>
          ))}
        </SecondQuestion>
      );
    case 2:
      return (
        <ThirdQuestion>
          <Text sx={{ ...questionStyles, maxWidth: ['', '400px', '', 'none'] }}>
            What's <Box as="span">your</Box> favourite car movie?
          </Text>
          {questions[2].answers.map((answer, index) => (
            <RadioContainer key={index} answer={answer} qID={2}>
              <Box
                as={'input'}
                type="radio"
                value={answer}
                sx={{ ...radioInputStyles }}
                name={`question-2`}
                id={`question-2-${slugify(answer)}`}
                checked={currentAnswers.answers[2].answer === answer}
                onChange={(e) => {
                  updateAnswers(2, answer);
                  setNextDisabled(false);
                }}
              />
              <Box
                as="img"
                src={`/images/name-my-car/radio-images/radio-image_3-${slugify(
                  answer
                )}.png`}
                loading="eager"
              />
            </RadioContainer>
          ))}
        </ThirdQuestion>
      );
    case 3:
      return (
        <FourthQuestion>
          <Text
            sx={{ ...questionStyles, maxWidth: ['320px', '400px', '', 'none'] }}
          >
            What is your car most <Box as="span">used</Box> for?
          </Text>
          {questions[3].answers.map((answer, index) => (
            <RadioContainer key={index} answer={answer} qID={3}>
              <Box
                as={'input'}
                type="radio"
                value={answer}
                sx={{ ...radioInputStyles }}
                name={`question-3`}
                id={`question-3-${slugify(answer)}`}
                checked={currentAnswers.answers[3].answer === answer}
                onChange={(e) => {
                  updateAnswers(3, answer);
                  setNextDisabled(false);
                }}
              />
              <Box
                as="img"
                src={`/images/name-my-car/radio-images/radio-image_4-${slugify(
                  answer
                )}.png`}
                loading="eager"
              />
            </RadioContainer>
          ))}
        </FourthQuestion>
      );
    case 4:
      return (
        <FifthQuestion>
          <Text
            sx={{ ...questionStyles, maxWidth: ['200px', '280px', '', 'none'] }}
          >
            What <Box as="span">gender</Box> is your car?
          </Text>
          {questions[4].answers.map((answer, index) => (
            <RadioContainer key={index} answer={answer} qID={4}>
              <Box
                as={'input'}
                type="radio"
                value={answer}
                sx={{ ...radioInputStyles }}
                name={`question-4`}
                id={`question-4-${slugify(answer)}`}
                checked={currentAnswers.answers[4].answer === answer}
                onChange={(e) => {
                  updateAnswers(4, answer);
                  setNextDisabled(false);
                }}
              />
              <Box
                as="img"
                src={`/images/name-my-car/radio-images/radio-image_5-${slugify(
                  answer
                )}.png`}
                loading="eager"
              />
            </RadioContainer>
          ))}
          <Box
            sx={{
              gridColumn: ['1 / -1'],
              display: 'flex',
              justifyContent: 'flex-end',
              pl: ['', '', '', '50%'],
              '@media screen and (min-width: 1200px)': {
                pl: '40%',
              },
            }}
          >
            <Box
              as="img"
              src="/images/name-my-car/final-question-car.png"
              sx={{
                width: '100%',
                mt: ['-40px', '', '-60px', '-120px'],
                position: 'relative',
                '@media screen and (min-width: 1200px)': {
                  width: '120%',
                  position: 'relative',
                  left: '20%',
                },
              }}
            />
          </Box>
        </FifthQuestion>
      );
    default:
      return <div>No question found</div>;
  }
};

const Quiz = () => {
  const [currentAnswers, setCurrentAnswers] = useState(initalAnswers);
  const [finalResult, setFinalResult] = useState('');
  const [pageStatus, setPageStatus] = useState({
    landing: true,
    results: false,
    shared: false,
  });

  const [nextDisabled, setNextDisabled] = useState(true);
  const [current, setCurrent] = useState({ qId: null, rId: 0 });

  // Form
  const {
    // handleSubmit,
    // register,
    // errors,
    formState,
    reset,
  } = useForm();
  const {
    isSubmitSuccessful,
    // isSubmitting
  } = formState;
  const [formValues, setFormValues] = useState({
    privacyAgreed: false,
    marketingOptOut: false,
    storeOptions: '',
    selectedRegion: null,
  });
  // const [hiddenSelectedRegion, setHiddenSelectedRegion] = useState('novalue');
  // const [hiddenSelectedStore, setHiddenSelectedStore] = useState('novalue');
  // const selectStoreRef = useRef();

  // const handleRegionSelect = (e) => {
  //   const regionSel = parseInt(e.target.value);
  //   const regionArray = Object.values(storesByRegion);
  //   const storesSel = regionSel !== '' ? regionArray[regionSel].stores : '';
  //   setHiddenSelectedRegion(regionArray[regionSel].name);
  //   setHiddenSelectedStore('novalue');
  //   setFormValues((prevState) => ({
  //     ...prevState,
  //     storeOptions: storesSel,
  //     selectedRegion: regionSel,
  //   }));
  //   selectStoreRef.current.value = '';
  // };

  // const onSubmit = async (data) => {
  //   try {
  //     // Need to rename a few fields to get this to work with activecampaign
  //     let preppedData = {
  //       'field[1]': data.selectregion,
  //       'field[2]': data.selectstore,
  //       'field[3][]': data.privacyconsent,
  //       'field[4][]': data.marketingoptout,
  //       ...data,
  //     };

  //     // console.log('PreppedData:');
  //     // console.log(preppedData);

  //     // Remove the old custom field (renamed above)
  //     const {
  //       privacyconsent,
  //       marketingoptout,
  //       selectregiondropdown,
  //       selectregion,
  //       selectstoredropdown,
  //       selectstore,
  //       ...cleaned
  //     } = preppedData;

  //     // Convert to FormData
  //     // console.log('FormDataFromCleaned');
  //     let form_data = new FormData();
  //     for (let key in cleaned) {
  //       // console.log('in for loop', key, cleaned[key]);
  //       form_data.append(key, cleaned[key]);
  //     }

  //     // Iterate through form_data to check data
  //     // for (var pair of form_data.entries()) {
  //     //   console.log(pair[0] + ', ' + pair[1]);
  //     // }

  //     await fetch('https://motorserve.activehosted.com/proc.php', {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       cache: 'no-cache',
  //       body: form_data,
  //     });
  //   } catch (error) {
  //     console.log('Request failed', error);
  //   }
  // };

  const Data = getData(rawData);

  const handleShowResult = () => {
    setCurrent((prevState) => ({
      ...prevState,
      rId: getResult(Data, currentAnswers.answers),
    }));
    setFinalResult(
      Data[getResult(Data, currentAnswers.answers)].resultsList[
        randomNumber(
          Data[getResult(Data, currentAnswers.answers)].resultsList.length
        )
      ]
    );
    setPageStatus((prevState) => ({
      ...prevState,
      results: true,
    }));
  };

  const updateAnswers = (qId, v) => {
    let updatedList = currentAnswers.answers.map((item) => {
      if (item.id === qId) {
        return { ...item, answer: v };
      }
      return item;
    });

    setCurrentAnswers({ answers: updatedList }); // set state to new object with updated list
  };

  const Next = (e) => {
    setNextDisabled(currentAnswers.answers[current.qId + 1].answer == null);
    setCurrent((prevState) => ({
      ...prevState,
      qId: current.qId + 1,
    }));
    e.target.blur();
  };
  const Prev = (e) => {
    setCurrent((prevState) => ({
      ...prevState,
      qId: current.qId - 1,
    }));
    setNextDisabled(false);
    e.target.blur();
  };

  const resetQuiz = () => {
    setCurrentAnswers(initalAnswers);
    setPageStatus(() => ({
      landing: true,
      results: false,
      shared: false,
    }));
    setCurrent(() => ({
      qId: null,
      rId: 0,
    }));
    setFormValues(() => ({
      privacyAgreed: false,
      marketingOptOut: false,
      storeOptions: '',
      selectedRegion: null,
    }));
    setNextDisabled(true);
    reset();
  };

  return pageStatus.landing ? (
    <LandingPanel>
      <Text sx={{ ...landingHeadingStyles, mt: ['40px', '', '30px'] }}>
        Find the perfect name for your car
      </Text>

      <Button
        onClick={() => {
          setPageStatus((prevState) => ({
            ...prevState,
            landing: false,
          }));
          setCurrent((prevState) => ({
            ...prevState,
            qId: 0,
          }));
        }}
        sx={{
          ...singleButtonStyles,
          mt: ['30px', '', '30px'],
          minWidth: '230px',
        }}
      >
        Start the Quiz
      </Button>
    </LandingPanel>
  ) : !pageStatus.results ? (
    <QuestionPanel currentQuestion={getQuestion(current.qId)}>
      <SwitchTransition>
        <CSSTransition key={current.qId} timeout={300} classNames="fade">
          {renderQuestion(
            current.qId,
            currentAnswers,
            updateAnswers,
            setNextDisabled
          )}
        </CSSTransition>
      </SwitchTransition>
      <ButtonFlex>
        <Button
          sx={{ ...prevButtonStyles }}
          onClick={(e) => {
            current.qId !== 0
              ? Prev(e)
              : setPageStatus((prevState) => ({
                  ...prevState,
                  landing: false,
                }));
          }}
        >
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.50209 15.4935L8.03369 13.6687L3.06321 7.74675L8.03369 1.82478L6.50209 -2.01611e-05L-2.7643e-07 7.74675L6.50209 15.4935Z"
              fill="currentColor"
            />
          </svg>
          Prev
        </Button>
        <Button
          sx={{ ...nextButtonStyles }}
          onClick={(e) => {
            current.qId + 1 !== questions.length ? Next(e) : handleShowResult();
          }}
          disabled={nextDisabled}
        >
          {current.qId + 1 !== questions.length ? 'Next' : 'Complete'}
        </Button>
      </ButtonFlex>
    </QuestionPanel>
  ) : !isSubmitSuccessful && !pageStatus.shared ? (
    <CustomerFormPanel>
      <Text
        sx={{
          ...headingStyles,
        }}
      >
        The Motorserve Experts name your car
      </Text>
      <NumberPlate>
        {finalResult ? finalResult : 'No results given'}
      </NumberPlate>
      <Text
        sx={{ ...headingStyles, fontSize: '2.2rem', lineHeight: 1.2, mb: 0 }}
      >
        Thanks for completing the quiz!
      </Text>
      <Text sx={{ ...textStyles, mt: '10px', textAlign: ['center'] }}>
        Find out more about how we can look after your car at Motorserve.
      </Text>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: ['100%', 'auto'],
          justifyContent: ['center'],
        }}
      >
        <CustomButton
          sx={{ ...singleButtonStyles }}
          url={
            'https://motorserve.com.au/service-centres/?utm_source=quiz&utm_medium=website&utm_campaign=name-my-car'
          }
        >
          Find your nearest store
        </CustomButton>
      </Box>
      <Text
        sx={{
          fontSize: '1.4rem',
          mt: '48px',
          maxWidth: '400px',
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        Motorserve Pty Ltd ABN 41 121 715 393, NSW license number MVRL43713, ACT
        license number 20000142.
      </Text>

      {/* <Box
        as="form"
        sx={{ width: '100%', textAlign: 'center', mt: '20px' }}
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <HiddenFormInputs formId="1" register={register} />
        <Box
          className="form-grid"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: ['10px', '', '20px'],
            width: '100%',
            mx: 'auto',
            my: '30px',
            maxWidth: '625px',
          }}
        >
          <FormInputItem>
            <label htmlFor="fullname" className="form-input">
              Name*
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter name"
              style={{ border: errors.fullname && '2px solid red' }}
              ref={register({
                required: 'Name required.',
                maxLength: 80,
              })}
            />
            <Box
              sx={{ fontSize: '16px', mt: errors.fullname && '5px' }}
              as="p"
              className={`required `}
            >
              {errors.fullname && errors.fullname.message}
            </Box>
          </FormInputItem>
          <FormInputItem>
            <label htmlFor="email" className="">
              Email*
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              required
              className=""
              style={{ border: errors.email && '2px solid red' }}
              ref={register({
                required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            <Box
              sx={{ fontSize: '16px', mt: errors.email && '5px' }}
              as="p"
              className={`required `}
            >
              {errors.email && errors.email.message}
            </Box>
          </FormInputItem>
          <Box
            as="label"
            sx={{
              fontSize: [2, 3, 4],
              textTransform: 'uppercase',
              fontFamily: 'bold',
              letterSpacing: '0.2px',
              gridColumn: ['1 / -1'],
              textAlign: 'left',

              mb: ['-10px', '', '-18px'],
              mt: ['10px', '', '0'],
              display: ' inline-block',
            }}
            className="store-selection-label"
          >
            Preferred Motorserve Store
          </Box>
          <FormInputItem>
            <SelectWrapper>
              <select
                id="selectregiondropdown"
                name="selectregiondropdown"
                defaultValue=""
                onChange={(e) => handleRegionSelect(e)}
              >
                <option value="" disabled>
                  Select a region
                </option>
                {Object.values(storesByRegion).map((region, key) => (
                  <option key={key} value={key}>
                    {region.name}
                  </option>
                ))}
              </select>
              <input
                type="hidden"
                id="selectregion"
                name="selectregion"
                ref={register({})}
                value={hiddenSelectedRegion}
                placeholder=""
              />
            </SelectWrapper>
          </FormInputItem>
          <FormInputItem>
            <SelectWrapper>
              <select
                id="selectstoredropdown"
                name="selectstoredropdown"
                defaultValue=""
                ref={selectStoreRef}
                disabled={formValues.selectedRegion == null}
                onChange={(e) => setHiddenSelectedStore(e.target.value)}
              >
                <option value="" disabled>
                  Select a store
                </option>
                {formValues.storeOptions &&
                  formValues.storeOptions.map((store, key) => (
                    <option key={key} value={store}>
                      {store}
                    </option>
                  ))}
              </select>
            </SelectWrapper>
            <input
              type="hidden"
              id="selectstore"
              name="selectstore"
              ref={register({})}
              value={hiddenSelectedStore}
              placeholder=""
            />
          </FormInputItem>
          <FormCheckboxItem>
            <input
              type="checkbox"
              id="field_3true"
              name="privacyconsent"
              value="true"
              ref={register({
                required: 'Please check this box if you want to proceed.',
              })}
              onChange={() => {
                setFormValues((prevState) => ({
                  ...prevState,
                  privacyAgreed: !formValues.privacyAgreed,
                }));
              }}
            />
            <label htmlFor="field_3true">
              I have read and agree to the{' '}
              <a href="/privacy-policy" target="_blank">
                privacy policy
              </a>
              . *
            </label>
          </FormCheckboxItem>
          <FormCheckboxItem>
            <input
              type="checkbox"
              id="marketingoptout"
              name="marketingoptout"
              value="true"
              ref={register({})}
              onChange={() => {
                setFormValues((prevState) => ({
                  ...prevState,
                  marketingOptOut: !formValues.marketingOptOut,
                }));
              }}
            />
            <label htmlFor="marketingoptout">
              I do not wish to receive promotional and/or marketing material
              from Motorserve.
            </label>
          </FormCheckboxItem>
          <Box
            sx={{
              gridColumn: ['1 / -1'],
              textAlign: 'center',
            }}
          >
            <Button
              sx={{ ...singleButtonStyles, mx: 'auto' }}
              id="_form_3_submit"
              className="download-btn "
              type="submit"
              disabled={!formValues.privacyAgreed}
            >
              {isSubmitting ? 'Submitting...' : 'Enter competition'}
            </Button>
            <Text
              sx={{
                ...tcStyles,
                maxWidth: '400px',
              }}
            >
              *
              <a href="/competition" target="_blank">
                T&Cs apply. See here for more details
              </a>
              .
            </Text>
          </Box>
        </Box>
      </Box> */}
      <ButtonFlex>
        <Button sx={{ ...prevButtonStyles }} onClick={() => resetQuiz()}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M0.833496 10L2.50016 11.6667L4.16683 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 9.97942 2.5 10.2572 2.5 10.8333"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Restart?
        </Button>
        <Button as={Link} to="/" sx={{ ...nextButtonStyles }}>
          Go to Motorserve
        </Button>
        {/* <Box sx={{ ...shareButtonStyles }}>
          <FacebookShareButton
            resetButtonStyle={false}
            url={
              window.location.origin !== 'http://localhost:8000'
                ? window.location.origin + '/namemycar/' + slugify(finalResult)
                : 'https://campaign-name-generator--motorserve-gatsby-uat.netlify.app/namemycar/' +
                  slugify(finalResult)
            }
            onClick={() =>
              setPageStatus((prevState) => ({
                ...prevState,
                shared: true,
              }))
            }
          >
            Share
          </FacebookShareButton>
        </Box> */}
      </ButtonFlex>
    </CustomerFormPanel>
  ) : !pageStatus.shared ? (
    <ShareToWinPanel>
      <Text
        sx={{
          ...headingStyles,
          mt: [0, '40px'],
          mb: [0, '10px'],
        }}
      >
        Thanks for entering
      </Text>
      <NumberPlate>
        {finalResult ? finalResult : 'No results given'}
      </NumberPlate>
      <Text sx={{ ...textStyles, textTransform: 'uppercase' }}>
        FOR AN EXTRA CHANCE TO WIN SHARE YOUR CAR NAME ON FACEBOOK NOW
      </Text>
      <Text sx={{ ...textStyles, mt: '10px' }}>
        Don’t forget to #NAMEMYCAR for it to count
      </Text>

      <Box sx={{ ...singleShareButtonStyles }}>
        <FacebookShareButton
          resetButtonStyle={false}
          url={
            window.location.origin !== 'http://localhost:8000'
              ? window.location.origin + '/namemycar/' + slugify(finalResult)
              : 'https://campaign-name-generator--motorserve-gatsby-uat.netlify.app/namemycar/' +
                slugify(finalResult)
          }
          onClick={() =>
            setPageStatus((prevState) => ({
              ...prevState,
              shared: true,
            }))
          }
        >
          Share to Win
        </FacebookShareButton>
      </Box>
      <Text
        sx={{
          ...tcStyles,
          maxWidth: '400px',
        }}
      >
        *
        <a href="/competition" target="_blank">
          T&Cs apply. See here for more details
        </a>
        .
      </Text>

      <ButtonFlex>
        <Button sx={{ ...prevButtonStyles }} onClick={() => resetQuiz()}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M0.833496 10L2.50016 11.6667L4.16683 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 9.97942 2.5 10.2572 2.5 10.8333"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Restart?
        </Button>
        <Button as={Link} to="/" sx={{ ...nextButtonStyles }}>
          Go to Motorserve
        </Button>
      </ButtonFlex>
    </ShareToWinPanel>
  ) : (
    <ThankYouPanel>
      <Text
        sx={{
          ...headingStyles,
          maxWidth: '400px',
          textAlign: ['left', 'center'],
          mt: [0, '40px'],
          mb: [0, '10px'],
        }}
      >
        Thanks for completing the quiz!
      </Text>
      <Text
        sx={{ ...textStyles, maxWidth: '400px', textAlign: ['left', 'center'] }}
      >
        Find out more on how we can look after your car at Motorserve
      </Text>
      <Box
        sx={{
          px: ['20px', '0'],
          position: ['fixed', '', 'relative'],
          bottom: ['20px', '', '0'],
          textAlign: ['', 'center'],
        }}
      >
        <Button
          as={Link}
          to="/service-centres"
          sx={{
            ...singleButtonStyles,
          }}
        >
          Find Your Nearest Store
        </Button>
        <Text
          sx={{
            ...disclaimerStyles,
            maxWidth: '400px',
          }}
        >
          Disclaimer: Motorserve Pty Ltd NSW license number MVRL43713, ACT
          license number 20000142
        </Text>
      </Box>
    </ThankYouPanel>
  );
};

export default Quiz;
