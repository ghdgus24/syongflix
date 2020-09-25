import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "./media";

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const Title = styled.span`
	font-size: 14px;
	font-weight: 600;
	${media.mobile`
		font-size: 4vw;
	`}
`;

const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none;
	}
	${media.mobile`
		display: flex;
		overflow-x: scroll;
	`}
`;

const Section = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grid>{children}</Grid>
	</Container>
);

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default Section;
