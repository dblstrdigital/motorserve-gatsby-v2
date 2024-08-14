import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Text } from 'rebass';

import Spacer from '@components/global/Spacer';
import ChevronLink from '../global/ChevronLink';
import {
  containerInnerStyles,
  gridFallbackStylesColumn,
} from '../global/Container';
import { FormInputItem, SelectWrapper } from './FormFields';
import Button from '../global/Button';
import { contactFormIdGenerator } from '../../util/helpers';
import { Error } from '../../styles/icons';

const statesList = [
  {
    name: 'australian capital territory',
    abbreviation: 'act',
    capital: 'canberra',
    type: 'territory',
  },
  {
    name: 'new south wales',
    abbreviation: 'nsw',
    capital: 'sydney',
    type: 'state',
  },
  {
    name: 'northern territory',
    abbreviation: 'nt',
    capital: 'darwin',
    type: 'territory',
  },
  {
    name: 'queensland',
    abbreviation: 'qld',
    capital: 'brisbane',
    type: 'state',
  },
  {
    name: 'south australia',
    abbreviation: 'sa',
    capital: 'adelaide',
    type: 'state',
  },
  {
    name: 'tasmania',
    abbreviation: 'tas',
    capital: 'hobart',
    type: 'state',
  },
  {
    name: 'victoria',
    abbreviation: 'vic',
    capital: 'melbourne',
    type: 'state',
  },
  {
    name: 'western australia',
    abbreviation: 'wa',
    capital: 'perth',
    type: 'state',
  },
];

const errorMessageStyles = {
  paddingLeft: '30px',
  fontSize: '18px',
  color: 'red',
  svg: {
    position: 'absolute',
    left: 0,
    height: '20px',
    width: '20px',
  },
};

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}
function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
const ContactForm = ({ stores, ...props }) => {
  const {
    reset,
    resetField,
    register,
    handleSubmit,
    formState: { isValid, isSubmitSuccessful, isSubmitting, errors },
  } = useForm();
  const [formValues, setFormValues] = useState({
    storeOptions: [],
    selectedState: null,
    selectedStoreEmail: null,
  });

  const [submitFormId, setSubmitFormId] = useState(contactFormIdGenerator);

  let validStores = stores.filter((store) => {
    return store.email !== null;
  });
  validStores.sort(dynamicSort('name'));

  const enquiriesEmail = 'enquiries@motorserve.com.au';
  const uniqueStates = [...new Set(validStores.map((store) => store.state))];
  uniqueStates.sort();

  const statesArray = statesList.filter((states) =>
    uniqueStates.includes(states.abbreviation)
  );

  const handleStateSelect = (e) => {
    const stateSel = e.target.value;
    const statesArray = validStores.filter((store) => {
      return store.state === stateSel;
    });

    setFormValues((prevState) => ({
      ...prevState,
      storeOptions: statesArray,
      selectedState: stateSel,
      selectedStoreEmail: null,
    }));
  };

  const handleStoreSelect = (e) => {
    const storeSel = e.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      selectedStoreEmail: storeSel,
    }));
  };

  const onSubmit = async (data) => {
    const response = await fetch(`/api/sendgrid`, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        'content-type': `application/json`,
      },
    });
    return response;
  };

  const clearForm = () => {
    setFormValues(() => ({
      storeOptions: '',
      selectedState: null,
      selectedStoreEmail: null,
    }));
    // Generates new ID when 'Start New Enquiry' cta is clicked
    setSubmitFormId(contactFormIdGenerator);
    reset();
  };

  // Test: Add scroll to top on valid and successful form submit
  useEffect(() => {
    if (isValid && isSubmitSuccessful) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isValid, isSubmitSuccessful]);

  return (
    <Box
      sx={{
        ...gridFallbackStylesColumn,
        height: '100%',
        position: 'relative',
      }}
    >
      <Box
        as="form"
        name="contactForm"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          ...containerInnerStyles,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Box
          className="form-grid"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: ['10px', '', '20px'],
            width: '100%',
            mx: 'auto',
            mb: '120px',
          }}
        >
          {isSubmitSuccessful ? (
            <Box sx={{ alignItems: 'flex-start' }}>
              <Text as="p" sx={{ textAlign: 'left' }}>
                Thank you for your enquiry, we will be in touch with you
                shortly.
              </Text>
              <Text as="p" sx={{ textAlign: 'left' }}>
                {`Your enquiry reference number is ${submitFormId}.`}
              </Text>
            </Box>
          ) : (
            <>
              <input
                type="hidden"
                name="formSubmitId"
                {...register('formSubmitId', { value: submitFormId })}
              />
              <FormInputItem>
                <Box as="label" htmlFor="fullname" className="form-input">
                  Name*
                </Box>
                <input
                  type="text"
                  name="fullname"
                  className={`${errors.fullname && 'error'}`}
                  placeholder="Enter name"
                  {...register('fullname', {
                    required: 'Name required',
                    maxLength: {
                      value: 80,
                      message: 'Maximum of 80 characters',
                    },
                  })}
                />
                {errors.fullname && (
                  <Box
                    sx={{
                      mt: errors.fullname && '10px',
                      ...errorMessageStyles,
                    }}
                    as="p"
                    className={`required`}
                  >
                    <Error />
                    {errors.fullname?.message}
                  </Box>
                )}
              </FormInputItem>
              <FormInputItem>
                <Box as="label" htmlFor="rego" className="form-input">
                  Rego
                </Box>
                <input
                  type="text"
                  name="rego"
                  className={`${errors.rego && 'error'}`}
                  placeholder="Enter registration number"
                  {...register('rego', {
                    maxLength: 9,
                  })}
                />
                {errors.rego && (
                  <Box
                    sx={{ mt: errors.rego && '10px', ...errorMessageStyles }}
                    as="p"
                  >
                    <Error />
                    Maximum of 9 characters
                  </Box>
                )}
              </FormInputItem>
              <FormInputItem>
                <Box as="label" htmlFor="phone" className="form-input">
                  Phone*
                </Box>
                <input
                  type="text"
                  name="phone"
                  className={`${errors.phone && 'error'}`}
                  placeholder="Enter phone number"
                  {...register('phone', {
                    required: 'Phone number required',
                    pattern: {
                      value:
                        /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(|-){0,1}[0-9]{2}(|-){0,1}[0-9]{2}(|-){0,1}[0-9]{1}(|-){0,1}[0-9]{3}$/,
                      message: 'Please enter a valid contact number',
                    },
                  })}
                />
                {/* https://www.etl-tools.com/regular-expressions/is-australian-mobile-number.html */}
                {errors.phone && (
                  <Box
                    sx={{ mt: errors.phone && '10px', ...errorMessageStyles }}
                    as="p"
                    className={`required`}
                  >
                    <Error />
                    {errors.phone?.message}
                  </Box>
                )}
              </FormInputItem>
              <FormInputItem>
                <Box as="label" htmlFor="email" className="">
                  Email*
                </Box>
                <input
                  type="text"
                  name="email"
                  className={`${errors.email && 'error'}`}
                  placeholder="Enter email"
                  {...register('email', {
                    required: 'Please enter your email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <Box
                    sx={{ mt: errors.email && '10px', ...errorMessageStyles }}
                    as="p"
                    className={`required`}
                  >
                    <Error />
                    {errors.email?.message}
                  </Box>
                )}
              </FormInputItem>
              <FormInputItem>
                <Box
                  as="label"
                  htmlFor="state"
                  className="state-selection-label"
                >
                  State*
                </Box>
                <SelectWrapper className={`${errors.state && 'error'}`}>
                  <select
                    id="state"
                    name="state"
                    defaultValue=""
                    {...register('state', {
                      required: 'Please select a state',
                      onChange: (e) => {
                        handleStateSelect(e);
                        resetField('store');
                      },
                    })}
                  >
                    <option value="" disabled>
                      Select a state
                    </option>
                    {statesArray.map((stateItem, key) => (
                      <option key={key} value={stateItem.abbreviation}>
                        {titleCase(stateItem.name)}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
                {errors.state && (
                  <Box
                    sx={{
                      mt: errors.state && '10px',
                      ...errorMessageStyles,
                    }}
                    as="p"
                    className={`required`}
                  >
                    <Error />
                    {errors.state?.message}
                  </Box>
                )}
              </FormInputItem>
              <FormInputItem>
                <Box
                  as="label"
                  htmlFor="store"
                  className="store-selection-label"
                >
                  Store*
                </Box>
                <SelectWrapper className={`${errors.store && 'error'}`}>
                  <select
                    {...register('store', {
                      required: 'Please select a store',
                      onChange: (e) => handleStoreSelect(e),
                    })}
                    id="store"
                    name="store"
                    defaultValue=""
                    disabled={formValues.selectedState == null}
                  >
                    <option value="" disabled>
                      Select a store
                    </option>
                    <option value={enquiriesEmail}>General Enquiries</option>
                    {formValues.storeOptions &&
                      formValues.storeOptions.map((store, key) => (
                        <option key={key} value={store.email}>
                          {store.name}
                        </option>
                      ))}
                  </select>
                </SelectWrapper>
                {errors.store && (
                  <Box
                    sx={{
                      mt: errors.store && '10px',
                      ...errorMessageStyles,
                    }}
                    as="p"
                    className={`required`}
                  >
                    <Error />
                    {errors.store?.message}
                  </Box>
                )}
              </FormInputItem>
              <FormInputItem fullWidth={true}>
                <Box as="label" htmlFor="message" className="">
                  Message
                </Box>
                <textarea
                  name="message"
                  id="message"
                  cols="20"
                  rows="5"
                  className={`${errors.message && 'error'}`}
                  {...register('message', {
                    required: 'Please enter your message',
                  })}
                ></textarea>
                {errors.message && (
                  <Box
                    sx={{ mt: errors.message && '5px', ...errorMessageStyles }}
                    as="p"
                    className={`required`}
                  >
                    <Error />
                    {errors.message?.message}
                  </Box>
                )}
              </FormInputItem>
            </>
          )}
          <Box
            sx={{
              gridColumn: ['1 / -1'],
              textAlign: 'left',
            }}
          >
            <Spacer size="2" />
            {isSubmitSuccessful ? (
              <Button variant="lightBlue" onClick={() => clearForm()}>
                Start New Enquiry
              </Button>
            ) : (
              <Button
                variant="lightBlue"
                as="button"
                type="submit"
                sx={{ '&:hover, &:focus': { cursor: 'pointer' } }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            )}
          </Box>
          <ChevronLink sx={{ mt: 4 }} route="/service-centres">
            Visit store locations
          </ChevronLink>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
