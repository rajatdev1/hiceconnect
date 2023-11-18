"use client"

import React, { useState } from 'react';
import { Box,Typography,Stack,Alert } from '@mui/material';
import {CustomTextField} from '../../components/TextField/TextField';
import ReusableSelect from '../../components/ReusableSelect/ReusableSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import {Divider} from '@mui/material';
import { Container, CssBaseline, Grid } from '@mui/material';
import MainLayout from './MainLayout';
import Link from 'next/link';
import '../styles/global.css'
import { useRouter } from 'next/navigation';


const OutletFrom = () => {
  // const [errors, setErrors] = useState({});
  const countries = [
    'India',
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    // Add more countries as needed
  ];

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    // Add more cities as needed
  ];

  const zones = [
    'Zone A',
    'Zone B',
    'Zone C',
    'Zone D',
    'Zone E',
    // Add more zones as needed
  ];
  const state = [
    'State A',
    'State B',
    'State C',
    'state D',
    'State E',
    // Add more zones as needed
  ];

  const [formData, setFormData] = useState({
    firstName: '', // Add the property names and their initial values      // for each field in your form.

    email: '',
    permissionLevel: '',
    address: '',
    city: '',
    country: '',
    state:'',
    zone: '',
    zipCode: '',
    retailorName: '',
    retailorContact: '',
    gpsCoordinates: '',
    gpsLink: '',
    tmeName: '',
    tseName: '',
    asmName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showAlert, setShowALert] = useState(false);
  const router = useRouter();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFieldChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const requiredFields: (keyof typeof formData)[] = [
      'firstName',
      'email',
      'address',
      'city',
      'state',
      'zone',
      'zipCode',
      'retailorName',
      'retailorContact',
      'gpsCoordinates',
      'gpsLink',
      'tmeName',
      'tseName',
      'asmName',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    //  console.log('Validation errors:', newErrors);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocusedField(event.target.name);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSave = () => {
    console.log('Save button clicked');
    const isFormValid = validateForm();
    console.log('Is form valid?', isFormValid);

    if (validateForm()) {
      // No errors, you can proceed with saving the data
      // Perform your save logic here
      console.log('data', formData);
      setShowALert(true);
    }
  };

  const handleBack = () => {
    router.push('/outlet');
  }

  return (
    <MainLayout>
        <>
        <Grid container className='outlet_header box_shadow' sx={{borderRadius: '5px'}}>
                <Grid item lg={9} >
                <p style={{fontSize:'14px', fontWeight: 400}}>
                    <Link href='/dashboard' style={{textDecoration: 'none'}}><span>Home</span></Link><Link href='/outlet' style={{marginLeft: '5px',textDecoration: 'none'}}><span>/ Outlet Master</span></Link> / Add New Outlet
                </p>
                <h3>Outlets</h3>
                </Grid>
            </Grid>
            
            <Grid sx={{ backgroundColor: "white", padding: "1rem", marginTop:'15px', borderRadius:'5px' }}>
      {/* <Box sx={{ padding: "2rem" ,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <>
        <Grid container className="outlet_header" sx={{ borderRadius: '5px' }}>
          <Grid item lg={9}>
            <p>
              <Link href="/dashboard">
                <span>Home</span>
              </Link>{' '}
              / Outlet Master / Add New Outlet
            </p>
            <h3>Outlets</h3>
          </Grid>
          <Box>
            {showAlert && (
              <Alert severity="success">
                Your outlet has been added to the list.
              </Alert>
            )}
          </Box>
        </Grid>

        <Grid
          sx={{
            backgroundColor: 'white',
            padding: '1rem',
            marginTop: '15px',
            borderRadius: '5px',
          }}
        >
          {/* <Box sx={{ padding: "2rem" ,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Box>
          <Typography sx={{ fontSize: "0.7rem", fontWeight: "400" }}>
            Home / Outlet Mater / Add New Oulet
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "800" }}>
            Outlets
          </Typography>
        </Box>
        <Box>{showAlert && <Alert severity="success">Your outlet has been added to the list.</Alert>}</Box>
      </Box> */}
          <h3>Outlet Information</h3>
          <Stack direction="row" spacing={3}>
            <Stack sx={{ width: '25%' }} spacing={2} direction="column">
              <CustomTextField
                label="Outlet Name"
                fullWidth
                name="outletName"
                asterisk={focusedField === 'outletName'}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.firstName}
                onChange={handleFieldChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              {/* <ReusableSelect
                label="City"
                labelColor="grey"
                value={formData.city}
                onChange={(e) =>
                  handleFieldChange({
                    target: { name: 'city', value: e.target.value },
                  })
                }
                options={cities.map((city) => ({ label: city, value: city }))}
                disabled={false}
                error={!!errors.city}
                helperText={errors.city}
                sx={{ maxWidth: '100%', background: 'white' }}
              /> */}
                <ReusableSelect
                label="Zone"
                labelColor="grey"
                value={formData.zone}
                onChange={(e) =>
                  handleFieldChange({
                    target: { name: 'zone', value: e.target.value },
                  })
                }
                options={zones.map((zone) => ({ label: zone, value: zone }))}
                disabled={false}
                error={!!errors.zone}
                helperText={errors.zone}
                sx={{ maxWidth: '100%', background: 'white' }}
              /> 
              <CustomTextField
                label="Retailor Contact No"
                fullWidth
                name="retailorContact"
                asterisk={focusedField === 'retailorContact'}
                onFocus={handleFocus}
                value={formData.retailorContact}
                onChange={handleFieldChange}
                error={!!errors.retailorContact}
                helperText={errors.retailorContact}
              />

              <CustomTextField
                label="TME Name"
                fullWidth
                name="tmeName"
                asterisk={focusedField === 'tmeName'}
                onFocus={handleFocus}
                value={formData.tmeName}
                onChange={handleFieldChange}
                error={!!errors.tmeName}
                helperText={errors.tmeName}
              />
            </Stack>
            
            <Stack sx={{ width: '25%' }} spacing={2} direction="column">
              <CustomTextField
                label="Lane Code"
                fullWidth
                name="outletName"
                asterisk={focusedField === 'outletName'}
                onFocus={handleFocus}
                // className={styles.imp}
                // value={formData.firstName}
                onChange={handleFieldChange}
                error={!!errors.firstName}
                helperText={errors.firstName || ''}
              />
              {/* <CustomTextField
                label="Address 1"
                fullWidth
                name="address"
                asterisk={focusedField === 'address'}
                onFocus={handleFocus}
                value={formData.address}
                onChange={handleFieldChange}
                error={!!errors.address}
                helperText={errors.address}
              /> */}
                <ReusableSelect
                label="State"
                labelColor="grey"
                value={formData.country}
                onChange={(e) =>
                  handleFieldChange({
                    target: { name: 'country', value: e.target.value },
                  })
                }
                options={countries.map((country) => ({
                  label: country,
                  value: country,
                }))}
                disabled={false}
                error={!!errors.country}
                helperText={errors.country}
                sx={{ maxWidth: '100%', background: 'white' }}
              />
              <CustomTextField
                label=" Retailer Email"
                fullWidth
                name="email"
                asterisk={focusedField === 'email'}
                onFocus={handleFocus}
                value={formData.email}
                onChange={handleFieldChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              <CustomTextField
                label="TSE Name"
                fullWidth
                name="tseName"
                asterisk={focusedField === 'tseName'}
                onFocus={handleFocus}
                value={formData.tseName}
                onChange={handleFieldChange}
                error={!!errors.tseName}
                helperText={errors.tseName}
              />
            </Stack>
            <Stack sx={{ width: '25%' }} spacing={2} direction="column">
            <CustomTextField
                label="Address 1"
                fullWidth
                name="address"
                asterisk={focusedField === 'address'}
                onFocus={handleFocus}
                value={formData.address}
                onChange={handleFieldChange}
                error={!!errors.address}
                helperText={errors.address}
              />
              {/* <ReusableSelect
                label="Zone"
                labelColor="grey"
                value={formData.zone}
                onChange={(e) =>
                  handleFieldChange({
                    target: { name: 'zone', value: e.target.value },
                  })
                }
                options={zones.map((zone) => ({ label: zone, value: zone }))}
                disabled={false}
                error={!!errors.zone}
                helperText={errors.zone}
                sx={{ maxWidth: '100%', background: 'white' }}
              /> */}
              <CustomTextField
                label="ZipCode"
                fullWidth
                name="zipCode"
                asterisk={focusedField === 'zipCode'}
                onFocus={handleFocus}
                value={formData.zipCode}
                onChange={handleFieldChange}
                error={!!errors.zipCode}
                helperText={errors.zipCode}
              />
              <CustomTextField
                label="GPS Coordinates"
                fullWidth
                name="gpsCoordinates"
                asterisk={focusedField === 'gpsCoordinates'}
                onFocus={handleFocus}
                value={formData.gpsCoordinates}
                onChange={handleFieldChange}
                error={!!errors.gpsCoordinates}
                helperText={errors.gpsCoordinates}
              />

              <CustomTextField
                label="ASM Name"
                fullWidth
                name="asmName"
                asterisk={focusedField === 'asmName'}
                onFocus={handleFocus}
                value={formData.asmName}
                onChange={handleFieldChange}
                error={!!errors.asmName}
                helperText={errors.asmName}
              />
            </Stack>
            <Stack sx={{ width: '25%' }} spacing={2} direction="column">
            <CustomTextField
                label="Address 2"
                fullWidth
                name="address"
                asterisk={focusedField === 'address'}
                onFocus={handleFocus}
                value={formData.address}
                onChange={handleFieldChange}
                error={!!errors.address}
                helperText={errors.address}
              />
              {/* <ReusableSelect
                label="State"
                labelColor="grey"
                value={formData.country}
                onChange={(e) =>
                  handleFieldChange({
                    target: { name: 'country', value: e.target.value },
                  })
                }
                options={countries.map((country) => ({
                  label: country,
                  value: country,
                }))}
                disabled={false}
                error={!!errors.country}
                helperText={errors.country}
                sx={{ maxWidth: '100%', background: 'white' }}
              /> */}
              <CustomTextField
                label="Retailor Name"
                fullWidth
                name="retailorName"
                asterisk={focusedField === 'retailorName'}
                onFocus={handleFocus}
                value={formData.retailorName}
                onChange={handleFieldChange}
                error={!!errors.retailorName}
                helperText={errors.retailorName}
              />
              <CustomTextField
                label="GPS Link"
                fullWidth
                name="gpsLink"
                asterisk={focusedField === 'gpsLink'}
                onFocus={handleFocus}
                value={formData.gpsLink}
                onChange={handleFieldChange}
                error={!!errors.gpsLink}
                helperText={errors.gpsLink}
              />
            </Stack>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '1rem' }}>
            <CustomButton
              onClick={handleBack}
              sx={{
                border: '0.5px solid black',
                padding: '0.5rem 3rem',
                color: 'black',
              }}
            >
              Back
            </CustomButton>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <CustomButton
              type="button"
              // onClick={() => setShowALert(true)}
              onClick={handleSave}
              sx={{
                border: '0.5px solid black',
                padding: '0.5rem 3rem',
                backgroundColor: 'gray',
                color: 'white',
                ':hover': 'black',
              }}
            >
              Save
            </CustomButton>
          </Box>
        </Grid>
      </>
    </MainLayout>
  );
};

export default OutletFrom;
