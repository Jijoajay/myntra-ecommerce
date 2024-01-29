import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import fetch from '../../api/fetch';
import { useNavigate } from 'react-router-dom';

export const ProfileEditForm = ({setUserInfo, userInfo}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        birthday: "",
        alternateMobileNo: "",
        hintName: ""
    });

    const [hintPlaceHolder, setHintPlaceHolder] = useState('Hint');
    const [emailPlaceHolder, setEmailPlaceHolder] = useState('Email');
    const [namePlaceHolder, setNamePlaceHolder] = useState('Full Name');
    const [birthPlaceHolder, setBirthPlaceHolder] = useState('Birthday (dd/mm/yyyy)');
    const [alternatePlaceHolder, setAlternatePlaceHolder] = useState('Alternate mobile Number');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenderChange = (gender) => {
        setFormData({ ...formData, gender });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const id = userInfo.length ? userInfo.length + 1 : 1
        const newProfile = {
            id:id,
            profile:formData
        }
        try {
            await fetch.post('/userInfo', newProfile)
            setUserInfo([...userInfo, formData])
            navigate('/my/profile')
        } catch (error) {
            console.log("error found at posting profile", error)
        }
    };

    return (
        <div className='profile-container'>
            <h3 className='edit'>Edit Details</h3>
            <form className='edit-profile-form' onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder='Mobile Number'
                    className='mobile-input'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                />
                <input
                    type="text"
                    placeholder={namePlaceHolder}
                    onFocus={() => setNamePlaceHolder("")}
                    onBlur={() => setNamePlaceHolder('Full Name')}
                    value={formData.fullName}
                    onChange={handleChange}
                    name="fullName"
                />
                <input
                    type="text"
                    placeholder={emailPlaceHolder}
                    onBlur={() => setEmailPlaceHolder("Email")}
                    onFocus={() => setEmailPlaceHolder("")}
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
                <div className='buttons'>
                    <button onClick={() => handleGenderChange("male")}>
                        {formData.gender === "male" && <TiTick size={20} style={{ color: "green" }} />}
                        Male
                    </button>
                    <button className='female-but' onClick={() => handleGenderChange("female")}>
                        {formData.gender === "female" && <TiTick size={20} style={{ color: "green" }} />}
                        Female
                    </button>
                </div>
                <input
                    type="text"
                    placeholder={birthPlaceHolder}
                    onFocus={() => setBirthPlaceHolder("")}
                    onBlur={() => setBirthPlaceHolder('Birthday (dd/mm/yyyy)')}
                    value={formData.birthday}
                    onChange={handleChange}
                    name="birthday"
                />
                <h3>Alternate Mobile details</h3>
                <input
                    type="number"
                    placeholder={alternatePlaceHolder}
                    onFocus={() => setAlternatePlaceHolder("")}
                    onBlur={() => setAlternatePlaceHolder('Alternate mobile Number')}
                    value={formData.alternateMobileNo}
                    onChange={handleChange}
                    name="alternateMobileNo"
                />
                <input
                    type="text"
                    placeholder={hintPlaceHolder}
                    onFocus={() => setHintPlaceHolder("")}
                    onBlur={() => setHintPlaceHolder('Hint')}
                    value={formData.hintName}
                    onChange={handleChange}
                    name="hintName"
                />
                <button type="submit" className='submit-but'>Save Details</button>
            </form>
        </div>
    );
};
