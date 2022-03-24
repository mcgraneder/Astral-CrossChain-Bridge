import React, { useState } from 'react';
import { NavContainer, 
         NavWrapper,
         NavLogoContainer,
         NavLogoLink,
} from './TransactionModalHeaderStyles';


export default function TransactionModalHeader() {

  return (
      
            <NavContainer>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                </NavWrapper>
            </NavContainer>
           

      );
}
