import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import CartContext from "../contexts/CartContext";
import CartItem from "./CartItem";
import clone from "just-clone";
// TODO: remove once endpoint is setup
const cartDetailsData = [
    {
        "name": "Garmin Vivofita,, Fitness Band",
        "price": "$129.99",
        "body_location": "Wrist",
        "category": "Fitness",
        "_id": 6556,
        "imageSrc": "data:image/jpeg;base64,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",
        "numInStock": 11,
        "companyId": 10713
      },
      {
        "name": "GolfBuddy WT3 Watch White",
        "price": "$169.95",
        "body_location": "Wrist",
        "category": "Lifestyle",
        "_id": 6557,
        "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALQAtAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAD8QAAIBAwMCBAMFBgMHBQAAAAECAwAEEQUSITFBBhNRYQcicRQygZGhI0JSYrHwgsHRFRYzkqLC4SQlQ2Oy/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAwEBAAMAAAAAAAAAARECEiExQQMTUWH/2gAMAwEAAhEDEQA/APcaKKKAooooCiuE4qPJNu+WP8WoHGlwdq8nufSkFVb73zH3pKjPyjt1PpTqqFHFAlVZenI9DzXeO4pVcNBzYDSfLpWO9GT2NA2UNJ+YdzTpLe1Nu53Y2np2qIBMw75+tLFx6rTJY90b9KbLrjOfxp7L6TVnU+1KEiH94VTfbQ2drA4JU47EcEV1rhiM5rfjWP8AJF1XapYb54mGTuT0q3jdXVWU5BGQalmNc9Touiiio0KKKKAooooCiikSttjY+gNAxPLn5V70jIRcdDjJPoK5EMLvbnFM3UpQEDmQ+ndv/FakZtyOm7O7YnGOoAzj60tbphwcEfkaiy3unaV5MF9e2sU82donmVC574BPNSx5cg37VYHoy9Pzq3GNv+yxcp+8Co96dWRH+6wP0NRfITqjFTVff3LWjcW09wAQCYggwScAZZlyTkcDJqZF8qvPpQB61T2V+LmETQO5TJUhgQVIOCrKeQQeoqYl03fB/SnivmmkU3KMbT70hblT1DD3xxTpIdMjkHH9amNbKZflagzjqR1qxkGBUGcdqsZvxU29otrLeyoSRcziZl9DtVTj/lzRfOp2mMMoC4OT1NTowPNXcMrnkY61y+jtTCzR5Rx0XsavV945Tn1arbeclsE81otJk3RFP4TkfQ1kxxOKura7+yftSMggAirffKcXOmhFdqHa6hFcR71yF9al1zel2iiigKKKKAqNdMThAevJ+lSCcVDB3M0pH0oOscdB93oP5qr4Lm2a+EbTJ52P2cW4bjwecfgak3TEKEU/MePqTVNq9jBpUd3qsk+IIB9qeLYvzSKqgfN12kxpwO6jnHFbjnfbE+IZ1vtd1fVZLf7VBbzx2SqyqVEMOZLggt8oyokGT3xVHBqNpp9qt2gm09zEzQwaTdyCSSRXZGUxH5P3JG74C98isT4n1i/stbSG0vZ7ae1gWOdoZSN0zEyS5x1+dyOfSrGz13xfFpQ1K40eHUtMnk+0Ge409WVnjbl2eMBuCuCWPas61J69vXPtPijTLtLRdRt9QdkdxFd22GIUqDl48AcsvUc/hUeXxFeXSpLcabcxxzqkjGy2XtvMBgq207W6AdOoHOawsfxTtb66a41CDUdPuHtTbO9hIkqMpyc7JAGByxOVYHgZJwBWnk8R+FfEWn2+k6Zrdrp0PnIZEljaBlRckKmQFyXCdG6Zq6mNhoPiPw9HBFY2+qxrLyRHdjyHP+FgPpx6Vox5cihtoIPRh0P415g9rrS6LPLe2cOoTy3yrAGkElutrHCGdi4HG7Y43EZLEcVUz3tpo8tmsUNzp11NbxzXAs7pokidwCIwuGBIBGc4ySMexMr2T7OjfcdlNKtQ6oysawfg7X9U1DULeJb9r2zZyrm5t0WVRtYqwZDtP3ehGcEZxW/iJKtn3paSezkv3ajRxCSQ56LUiXpTVueZB7Ui1Xx+YGExj2qWO3JHIoluYzkSIDTrvugiA7KOlV9zjGB1rVjluGZreGWTfGxUjsOhp0WjTxeW5wmRuOecA5xUKM/O1SoHOTyauM6lXNyI4/KiAVVXGB2q+gBESZ67RWWdS2R1J4A9a1UYIVQeoFZ6mOv87tpdFFFYdRRRRQMXTYjx3Y4pofKQOwG7/T+/alTHfOB6Cm3OFZj0J/Qf2asSm4hvuSx5WMfrWX+JF9Hb6PFBMf2c82+Yf/VEPNfP12hfxrVW4224J+85ya8c+N2q4FxAjtwkdouD0Zj5kn6Kg/xVdYeNXNzJdXU91cEGWaRpHP8AMxyf1r2HxLcXHh34NadYzyE3d7FHbnAC7UbMpGB6LhT65ry/wnpR1zxLpum7SyT3CiXB6Rg5c/goNbT456sLrxBaaYh+Syh3uo7PJhv/AMBPzqNoHgLW/CGnaZPY+KNJFzNLPvW5a2WUIm0AKDkMOdxOPWtXc/D/AMG67os2q+Hbm4tYljkdZdzeSCoJORIM44554rC/D7wdceKtVAcPHpkDA3M46n0jX1Y/oOfY6n4o+MLe2tv91PDpWK2hXybpofuhRx5KnuP4j3PHrkIun/DfxbZ6ZaajoWrCCW5hSYwx3D27ruAIGR8p4PXIqBres+LtGnjHizTo7ozDAluUz5yjjG+MgPwTw2evINaPQPBevLo9rf8AhbxmEkkhR5rcyExIxHzDKlhx05XtS/jHqUQ8P6ZodxcRXes+ZHLMYx90hCC2B93cx4GOlBpvhRNJf6FNqmn6XHC6mRYIpbn5ZnJG5iwT5fu44B7+pr0HRXu5dNik1O3S3vCn7aKOQOqtnHB7g9R9axtho8mj/DtLRLaWcx2BZUtkLyNMwwCEyu7Gd3Uc89cVvIgQmC248DPrRP12Y1B80xuSPSps3Q1WTHLVrmM9Itq5E00ZJJU7kX1U/wDnIpiQNMhkjEsZBIMcgww/D09xkVLMTTHyo5PLZhw+M4pJheJMTS+a/wDFjFa6+uMmRS+ZJHIwMTHPpU2wWe4fbHA+fcY/rSlT9oTVzo//AB39l/0q25E5524lWFktuu5sNKep9PpU2uCu1xt16pJPgooooooopMjbUZvQE0EQN87v6E/pTV1kRiPucLTsY/ZgepFRr2R1cNEhdlBYKBnPbp39cVpnpIndIoyX4SNcsfYDmvJpvCNj41tPt+qz3kMsk0k8ZgZQPnIxkFTn5VUdR0rW+JNVupfDd3FNbPa3VxItmqk8ktjcw9sE+tEO+0t7e0s4g0rLn5uEjQcFmI/IKOSfQAkGZ9eZXPwl1jTrgXXh7XYzKudm7dbyDPYMuR/TNY/xD4W8YQ3Ut9rWnX00shzJcDE+eOpZCRXuy2mozazLI+uTfZI7ZYmt4LdIx5xO7cCd2MLt4OTggZqXZNPb309s880yiKOeGSQjeASyspIAzym4H+YjtTGteML8SWsfCf8AsHRdJXTZ1XyzcJMWIB++2CAQ59T07VT+AdE0LWr65h8Q6oLCFYh5GJkjMkhYDqwIwBnj3FexeNYbae90O0fS9LvbjUL7yXN3bb3EIXc7KwIIwPfvWI8U+GPCEV3fw2GneIIEsABd3VlH9ot7diuQGDnJwOvNRV/4a+FsOjeIrPWrDWZLm2gYyJGIRl8qRjerYxyc8dOPeqLWktvFnxjs7Wx2SwWwjjmlToxjySfcBiB+FVF94Gn07y4dG8X6XKLuJZVge7+yPKrfd+UnByCOCc1r/gt4Sv8ASda1C61i0NvNHCqxKSG4bPII4wfY9jQewhVVAqgBQQAPYVIThV/OmgMsop3sfpiqzDFw2AarXbJqXdPxVeTzWuYx1TV3qA0yI3RtLq628GO2QM4BHXGen+tPW13FqlhDeW6yLHMm4LKhR19QwPQg8U9a8CRvYCo87NvySeetL9Z/HIoiCSasdH5klPsP7/Sq5GdRjPHvzUzS7mKB3WZwhfaFJ6Hr3q34nHrpd0VwV2uT0iiiigKYuziFvfAp+od63Re9WJQnCp9c/pVTrVs17DJbj7QEdQJHtpCkiqMn5SCDnIHSrZei/Q03H/xJTVZ6YO4ilbUNI0qa5ubkWccly73TZky7ERhuB0XParWwQvc6jKWX5rnyY3A5WONFUg59JPNI+tRjbXVpr+p319bSmOeQeVKiFl8sABckdO/WoF9q62NvLCLe5u4Ly8McMlliQxiYksHXIK7fm56HI5ByKqRbadIYtNa7v54wr77mSUrsCRkbhu5/dQAHpwK7ZB0t5r25hcXNwfNeNFJdUHEaAeoXBI/iLnvTjQSXEn/qgiwo3y2yHcCQeC574xkKOAepbjErzY4QZpm2xxgyOx7Ack0VnAkNz48tb+7uYYoLSxaGzguMwyGZ2xI4VwDjaQuRkVhJEvLmee2u7jXLXxDrWoiO/wBNjgKW01vvKnaQoyAnG7PPP1q6s9bvND+HUOo3Eyfatb1DdAl+7Sw26SNxkH91UUt/i79Km2982i6PLqU9/YXGnqFhs38NO8TSzsSAhiyYs4JONvHcVlqMzp8722n33iOTStC1HRr/AFIW4s51LXSRq2yNV7DAHT8a9i8M2kdtbSmONUQyGOJVGAscY2KAOw4P515zYW+lT69cSSaMtrrVognNvfWCpMxYgLIjxsI2+YjnZnJJrfWuq/YruDR0s/M2yfZVeKYEjagYs4IGAQSeCSaRnpoouctSnbCfXmuKMIB0z/Smbl8CrF+RCunyaiZpcrZam2dIkaWXPlxqXfHoBk10nxw6vtMgYLB1GTk1FkIL9apvDa6vd6HHcanJGl4ZJFZYuUIDEAj++1Lm+3wNny/MH8h5qYlq2PIx61FuCu45HAHTrUG01+xkupLSa4iivIgN8EjbXGf5TVnp0Qu7uLuu7cfoP7Fa+e2P+NJp8bQ2UMbnLKgB/KpFcUYrtcHtgooooCq6/OJwPUA1Y1D1GMMgk7of0NWJSYznb9D/AJUlFO6b60mBuV+tScBuVOD3qpfZjHP0qr1c2UZg8+xa5lmfavlKN4A6nOQcDjoe4q6Zf5T9aotf0eXUZY5oJ0Xy4nTy33KW3dcMOmcDseg96RmxFks9PSZYLTVGglZdyIZPMVl9Rntx/F/lUfV9H1C/0q7sWkSW3u4TEZLdwsm04zgMCvI4696hz6FqFpa3s0hkZ5I/s3lWyB1kSQgSuVAJ+6BgcYOc5HRiw1W8tbaKzEscapNiRSMMrByWAIxgMRycHGSMDtUQPEWmXSy6BPZW0ES6KWCWepKywyrsCKQ4BG5dox2zz2qh/wBmXel6jpuq6hYxfYJ9Wkv7yDSUaZLQogEPyr/MWJIH+len6Nq7Tabcz3oZPsqsbiQY2hhksoHX5Rj8x1OaQkvh6+kjMclussm4qysYXbbjdg8ZxkZ64zU8WvJlPBp/3g8V32v+VKLW4dI7Pzk2lraFQdw9mkKn8K3Gkf7UkuLk6taWMYjkKW81tIS0qdiykfLkY43Gl2WnQ2UssySTyyyDaXmk3ED0HtVlGNq+5on2uk8Z/Kqy+nwSKnXEgVeDVJcMZJMjpWuYnddByc1nvHmpzaboiraW/wBoluZNjRiTYREBljnr12rx/FWgQGs74tudKk0ue6juJTfWw8tInQ7JDuxwcY6989q3XKKfwf4xtre0tvD81pc213YoYWQpuT5Sf3h3xwc45FX2qeKLezsJ7jaWeONnAx0wOpqD4e8KvYWL3V4uby4Jdi3Ud+fcnNRL+BPPC3K7rZA0ky+qopcj6HaAfrU+RL7qBbaKk02j3VzbJNfX7j7TksSSZMM7Ek5+6VAAGBXr2maPY6YD9jjdc8ZeVnOPT5ieK85+HXnarqen3F0oBtrMSkAcAkYA/wCon616qOlc7fx2/nN9u0UUVl1FFFFAU1cp5kLqO4/Wna4aClic44+oqajAqCOhHFQ5kMVw69s5H0p2Fj0/L6V0z05y4lBjSt2fvAH6imN1d3VMXThVD0yp9qYurCC8jMd1bwXMZG0rNGGBGc459wKczXQamKjQadbwWb2rxeZE5dpBKobzCxJYt2OSTUe40KzntGtot9vE6eWwgO35NxZlHBxksckcnA5qzEh9aVvHXAp7TDSxgNyAqgcAdBS3bC80lpM9eQKizzcGrJabhq4ZpX8tM5J7VyaGO0jC4Elw3RT0X3pdo6ozzSHhRxUCK4e5Ml0//wAp+Uei9q6Z+OVv6dt7WSd2hkkwGVsvF8pUHjjPfnrWO1P4d6qSbWw8QA2Eg2sbmImaEeqsOGPp93FQNf8AizbeHPEcmnW9mt9DGoW6lSTBR8nKr2OO/vkdq9C0jWbXXNItdTsX3W9ym9Ceo5IIPuCCPwrHV9rzMiTeDzd+O9eVeJLxjDrVsjKsj2jW4z6ySxpx+BNeqg5JPavHvGVtNH4gvCYW+zSahCBJjgFRvIz9cflUkL9ehfDG2UW+oXIUYMqwLx2Vc/8Ad+lbisr8NYyvhO3lPWaWV/8ArIH6CtVWb9deJnMFFFFRoUUUUBXK7RQQNRgLBZEJDLwe/FRlVyAfMGV5+71q2Zdwxjg9aq3UxOyHp6+tb5v459Q5tfsVI+lHzDqn5GiKTKAdxwfwpwH2qsmt46ZwfQ0oGlkA9aQUwflOKKVn1pEkuBtHU0mRmQfd69+oFIUAjKnOe/rSQ0M/GO1RZXzT0lR3FbjFppwZIZItxUOCMjtkU9plsvSWQOI8DHTP4UmKNpJVRep6+w7msF4l+GmqSarda1ofiaeC+mfewmzGCR0XcnYDAwV6Cs9dZMTjnbtbTxL4Y0HxCv8A7vp0M79ph8kg/wAS4NK06ys9IsINP02BYLWEEJGpJ6nJOT1OSeaofBb+JYrO6tvFaRmeGRRFcRyKwnUjk/L6fQda0MR3tuPQVhu1IeVYoy0jBUUFnY9gOv6V5fI02vWJvpELSTXQWwiHy7mldmXP0RiPbIrVeNbgzw2mhRuVl1aUxykHBS2T5pm/5Rt/xUeBbU6vrd1qzptsLSV1s48fKHbAJH0UDHs1b3Iknk3Gjaeml6Xa2Mbblt4lj3Y+9jqfzqdRRXJ3FFFFAUUUUBRRRQFR7qDzV44YdKkUHmhmqgAo/PGev1p3mpNzBuBZevf3qKjdj+FdJdcrzjuTXQaOK4etGQzcqfQ/14pLRgkspIbuR3ocblI9aEfIyevQ/WquktG2Oo/KmTEScZGeuKks2RTMMMdvEcFiTy7ucs3uTTWbNKt7eeONpI1Ry3YnBxUS5umWXyponjcjgMOv49DT89yg+ZGA7Aqef0qrv7l5AA8hfbyu7HFYX1ITNKGIUHk09GyxRlmOAOpqBaqzSb2/CrXTbY3l4M58iDDMf4m7L/n+Vak/az7txg7zT/Et14wmvl0SWSNyLSNJyUVbcH5ssMj5jk8H2r0/QNLj0fSLawiAIhTBYDG5jyx/PNWIGBXaxbrvOcFFFFRoUUUUBRRRQFFFFAUUUUAaiXFqWO6LAPpUuinxLNVDpIhy4dT6joaUkkb/AHXBIq0xSHiR/vID+Fa8mPBBwe3NNkbST0z1qa9ov7hZT7VHlt5gOAHHt1qyxm84aam5JWjid05ZQSOK4XKtsbIb0NJ34rTO4p729Sch9iK4OSyDG761HiJuG77R+tSptLjMu5CduemeBUm2t9hCou4ntUxna5DbsdsUQzI3A9q0djapaQLEnQck9ye5pqwsxApZ8GVup9B6VNrPV307fz4z2KKKKy6CiiigKKKKAooooCiiigKKKKAooooCiiigK4aKKBDorjDqGHoRmq3UraOKBpotysOwPFFFWX2x/STFVZzPPOsbnAPpWjt7eOBf2a8nqx6miitdOf8AKHxXaKKw7iiiigKKKKAooooCiiig/9k=",
        "numInStock": 3,
        "companyId": 16478
      }
]

export const Cart = () => {
    
    const [localTotal, setLocalTotal] = useState(null);
    const {
        currentItems,
        actions:{
            setItemNumber,
            addItem,
            removeItem,
            deleteItem,
            getTotal,
        }
    } = useContext(CartContext);

    useEffect(() => console.log(getTotal()), [currentItems]);

    // const getTotal = () => {
    //     // Returns the total cost of the items in the cart
    //     const total =  Object.keys(currentItems).reduce(
    //         (previousValue, currentValue) => {
    //             // previousValue is the total cost so far
    //             // currentValue is the key of the current item in the cart
    //             console.log(currentValue);
    //             console.log(previousValue);
    //             const currentItem = currentItems[currentValue];
    //             return previousValue + currentItem.price;
    //         }, 0
    //     );
    //     return total;
    // };

    // TODO: Make call to populate cart item details on component load
    // useEffect(() => {console.log('hello'); console.log(currentItems)}, [])
    return(
        <CartWrapper>
            <CartSideCard>
                <CardSideWrapper>
                    <CardSideTitle>
                        Shopping
                    </CardSideTitle>
                    <CardSideTitle>
                        Cart
                    </CardSideTitle>
                </CardSideWrapper>
                
            </CartSideCard>
            <CartDetails>
                {cartDetailsData.map(elt => {
                    console.log(elt._id);
                    console.log(currentItems);
                    return (<CartItem 
                        key={elt._id}
                        id={elt._id}
                        name={elt.name} 
                        price={elt.price} 
                        imageSrc={elt.imageSrc}
                        // TODO: Change below so we properly get the count 
                        // count={1}
                        count={currentItems[elt._id] && currentItems[elt._id].numInCart}
                    />)
                })}
                <UpdateButton>Update Cart</UpdateButton>
                <SellerInstructions></SellerInstructions>
                <Total amt={getTotal()}/>
                <CheckoutButton></CheckoutButton>
            </CartDetails>
        </CartWrapper>
    );
};

const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: 'Helvetica', sans-serif;
`;

const CartSideCard = styled.div`
    /* TODO: see what can be taken from global styles */
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardSideWrapper = styled.div`
    border-bottom: solid 5px;
    font-weight: bold;
    margin
`;

const CardSideTitle = styled.div`
    font-size: 32pt;
`;

const UpdateButton = styled.button`
    /* TODO: see what can be taken from global styles */
`;

const SellerInstructions = styled.input`
    /* TODO: see what can be taken from global styles */
`;

const Total = ({ amt }) => {
    return(
        <div>
            <TotalText>Total: </TotalText><TotalAmt>{amt}</TotalAmt>
        </div>
    );
}

const TotalText = styled.span`
    /* TODO: see what can be taken from global styles */
`;

const TotalAmt = styled.span`
    /* TODO: see what can be taken from global styles */
`;

const CartDetails = styled.div`

`;

const CheckoutButton = styled.button`

`;



export default Cart;