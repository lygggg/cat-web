import styled from 'styled-components';

const ItemName = styled.div`
    font-size: 12px;
    color: #111;
    text-overflow: ellipsis;
    text-decoration: none;
    word-wrap: break-word;
    line-height: 16px;
    max-height:48px;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    justify-content: center;
`;

export const DescriptionName = styled.div`
    font-size: 12px;
    color: #111;
    text-overflow: ellipsis;
    text-decoration: none;
    word-wrap: break-word;
    line-height: 16px;
    max-height:48px;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    color: #346AFF;
`;

export const PriceName = styled.div`
    color: #ae0000;
    line-height: 20px;
    font-weight: bold;
`;
export const BoldName = styled.div`
    margin-right: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #55575f;
`;
export const MainName = styled.div`
    display: block;
    padding-right: 60px;
    font-weight: 700;
    font-size: 22px;
    line-height: 34px;
    word-break: break-all;
    color: #333;
    letter-spacing: -0.5px;
`;
export default ItemName;