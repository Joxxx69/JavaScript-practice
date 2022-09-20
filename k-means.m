

clear all
close all
clc

%Tengo 4 posiones de jugadores:
%   01. Portero
%   02. Defensa
%   03. Centrocampista
%   04. Delantero


% se debe tener la misma cantidad de caracteres, para que nombre sea un
% unico elemento, en este caso 14 caracteres


nombre(1,:)="Centrocampista";
nombre(2,:)="Centrocampista";
nombre(3,:)="Centrocampista";
nombre(4,:)="Centrocampista";
nombre(5,:)="Centrocampista";
nombre(6,:)="Centrocampista";
nombre(7,:)="Centrocampista";
nombre(8,:)="Centrocampista";
nombre(9,:)="Centrocampista";
nombre(10,:)="Centrocampista";
nombre(11,:)="Centrocampista";
nombre(12,:)="Centrocampista";
nombre(13,:)="Centrocampista";
nombre(14,:)="Centrocampista";
nombre(15,:)="Centrocampista";
nombre(16,:)="Centrocampista";
nombre(17,:)="Centrocampista";
nombre(18,:)="Centrocampista";
nombre(19,:)="Centrocampista";
nombre(20,:)="Centrocampista";
nombre(21,:)="Centrocampista";
nombre(22,:)="Centrocampista";
nombre(23,:)="Centrocampista";
nombre(24,:)="Centrocampista";
nombre(25,:)="Centrocampista";
nombre(26,:)="Centrocampista";
nombre(27,:)="Centrocampista";
nombre(28,:)="Centrocampista";
nombre(29,:)="Centrocampista";
nombre(30,:)="Centrocampista";
nombre(31,:)="Centrocampista";
nombre(32,:)="Centrocampista";
nombre(33,:)="Centrocampista";
nombre(34,:)="Centrocampista";
nombre(35,:)="Centrocampista";
nombre(36,:)="Centrocampista";
nombre(37,:)="Centrocampista";
nombre(38,:)="Centrocampista";
nombre(39,:)="Centrocampista";
nombre(40,:)="Centrocampista";
nombre(41,:)="Centrocampista";
nombre(42,:)="Centrocampista";
nombre(43,:)="Centrocampista";
nombre(44,:)="Centrocampista";
nombre(45,:)="Centrocampista";
nombre(46,:)="Centrocampista";
nombre(47,:)="Centrocampista";
nombre(48,:)="Centrocampista";
nombre(49,:)="Centrocampista";
nombre(50,:)="Centrocampista";
nombre(51,:)="Centrocampista";
nombre(52,:)="Centrocampista";
nombre(53,:)="Centrocampista";
nombre(54,:)="Centrocampista";
nombre(55,:)="Centrocampista";
nombre(56,:)="Centrocampista";
nombre(57,:)="Centrocampista";
nombre(58,:)="Centrocampista";
nombre(59,:)="Centrocampista";
nombre(60,:)="Centrocampista";
nombre(61,:)="Centrocampista";
nombre(62,:)="Centrocampista";
nombre(63,:)="Centrocampista";
nombre(64,:)="Centrocampista";
nombre(65,:)="Centrocampista";
nombre(66,:)="Centrocampista";
nombre(67,:)="Centrocampista";
nombre(68,:)="Centrocampista";
nombre(69,:)="Centrocampista";
nombre(70,:)="Centrocampista";
nombre(71,:)="Centrocampista";
nombre(72,:)="Centrocampista";
nombre(73,:)="Centrocampista";
nombre(74,:)="Centrocampista";
nombre(75,:)="Centrocampista";
nombre(76,:)="Centrocampista";
nombre(77,:)="Centrocampista";
nombre(78,:)="Centrocampista";
nombre(79,:)="Centrocampista";
nombre(80,:)="Centrocampista";
nombre(81,:)="Centrocampista";
nombre(82,:)="Centrocampista";
nombre(83,:)="Centrocampista";
nombre(84,:)="Centrocampista";
nombre(85,:)="Centrocampista";
nombre(86,:)="Centrocampista";
nombre(87,:)="Centrocampista";
nombre(88,:)="Centrocampista";
nombre(89,:)="Centrocampista";
nombre(90,:)="Centrocampista";
nombre(91,:)="Centrocampista";
nombre(92,:)="Centrocampista";
nombre(93,:)="Centrocampista";
nombre(94,:)="Centrocampista";
nombre(95,:)="Centrocampista";
nombre(96,:)="Centrocampista";
nombre(97,:)="Centrocampista";
nombre(98,:)="Centrocampista";
nombre(99,:)="Centrocampista";
nombre(100,:)="Centrocampista";
nombre(101,:)="Centrocampista";
nombre(102,:)="Centrocampista";
nombre(103,:)="Centrocampista";
nombre(104,:)="Centrocampista";
nombre(105,:)="Centrocampista";
nombre(106,:)="Centrocampista";
nombre(107,:)="Centrocampista";
nombre(108,:)="Centrocampista";
nombre(109,:)="Centrocampista";
nombre(110,:)="Centrocampista";
nombre(111,:)="Centrocampista";
nombre(112,:)="Centrocampista";
nombre(113,:)="Centrocampista";
nombre(114,:)="Centrocampista";
nombre(115,:)="Centrocampista";
nombre(116,:)="Centrocampista";
nombre(117,:)="Centrocampista";
nombre(118,:)="Centrocampista";
nombre(119,:)="Centrocampista";
nombre(120,:)="Centrocampista";
nombre(121,:)="Centrocampista";
nombre(122,:)="Centrocampista";
nombre(123,:)="Centrocampista";
nombre(124,:)="Centrocampista";
nombre(125,:)="Centrocampista";
nombre(126,:)="Centrocampista";
nombre(127,:)="Centrocampista";
nombre(128,:)="Centrocampista";
nombre(129,:)="Centrocampista";
nombre(130,:)="Centrocampista";
nombre(131,:)="Centrocampista";
nombre(132,:)="Centrocampista";
nombre(133,:)="Centrocampista";
nombre(134,:)="Centrocampista";
nombre(135,:)="Centrocampista";
nombre(136,:)="Centrocampista";
nombre(137,:)="Centrocampista";
nombre(138,:)="Centrocampista";
nombre(139,:)="Centrocampista";
nombre(140,:)="Centrocampista";
nombre(141,:)="Centrocampista";
nombre(142,:)="Centrocampista";
nombre(143,:)="Centrocampista";
nombre(144,:)="Centrocampista";
nombre(145,:)="Centrocampista";
nombre(146,:)="Centrocampista";
nombre(147,:)="Centrocampista";
nombre(148,:)="Centrocampista";
nombre(149,:)="Centrocampista";
nombre(150,:)="Centrocampista";
nombre(151,:)="Centrocampista";
nombre(152,:)="Centrocampista";
nombre(153,:)="Centrocampista";
nombre(154,:)="Centrocampista";
nombre(155,:)="Centrocampista";
nombre(156,:)="Centrocampista";
nombre(157,:)="Centrocampista";
nombre(158,:)="Centrocampista";
nombre(159,:)="Centrocampista";
nombre(160,:)="Centrocampista";
nombre(161,:)="Centrocampista";
nombre(162,:)="Centrocampista";
nombre(163,:)="Centrocampista";
nombre(164,:)="Centrocampista";
nombre(165,:)="Centrocampista";
nombre(166,:)="Centrocampista";
nombre(167,:)="Centrocampista";
nombre(168,:)="Centrocampista";
nombre(169,:)="Centrocampista";
nombre(170,:)="Centrocampista";
nombre(171,:)="Centrocampista";
nombre(172,:)="Centrocampista";
nombre(173,:)="Centrocampista";
nombre(174,:)="Centrocampista";
nombre(175,:)="Centrocampista";
nombre(176,:)="Centrocampista";
nombre(177,:)="Centrocampista";
nombre(178,:)="Centrocampista";
nombre(179,:)="Centrocampista";
nombre(180,:)="Centrocampista";
nombre(181,:)="Centrocampista";
nombre(182,:)="Centrocampista";
nombre(183,:)="Centrocampista";
nombre(184,:)="Centrocampista";
nombre(185,:)="Centrocampista";
nombre(186,:)="Centrocampista";
nombre(187,:)="Centrocampista";
nombre(188,:)="Centrocampista";
nombre(189,:)="Centrocampista";
nombre(190,:)="Centrocampista";
nombre(191,:)="Centrocampista";
nombre(192,:)="Centrocampista";
nombre(193,:)="Centrocampista";
nombre(194,:)="Centrocampista";
nombre(195,:)="Centrocampista";
nombre(196,:)="Centrocampista";
nombre(197,:)="Centrocampista";
nombre(198,:)="Centrocampista";
nombre(199,:)="Centrocampista";
nombre(200,:)="Centrocampista";
nombre(201,:)="Centrocampista";
nombre(202,:)="Centrocampista";
nombre(203,:)="Centrocampista";
nombre(204,:)="Centrocampista";
nombre(205,:)="Centrocampista";
nombre(206,:)="Centrocampista";
nombre(207,:)="Centrocampista";
nombre(208,:)="Centrocampista";
nombre(209,:)="Centrocampista";
nombre(210,:)="Centrocampista";
nombre(211,:)="Centrocampista";
nombre(212,:)="Centrocampista";
nombre(213,:)="Centrocampista";
nombre(214,:)="Centrocampista";
nombre(215,:)="Centrocampista";
nombre(216,:)="Centrocampista";
nombre(217,:)="Centrocampista";
nombre(218,:)="Centrocampista";
nombre(219,:)="Centrocampista";
nombre(220,:)="Centrocampista";
nombre(221,:)="Defensa       ";
nombre(222,:)="Defensa       ";
nombre(223,:)="Defensa       ";
nombre(224,:)="Defensa       ";
nombre(225,:)="Defensa       ";
nombre(226,:)="Defensa       ";
nombre(227,:)="Defensa       ";
nombre(228,:)="Defensa       ";
nombre(229,:)="Defensa       ";
nombre(230,:)="Defensa       ";
nombre(231,:)="Defensa       ";
nombre(232,:)="Defensa       ";
nombre(233,:)="Defensa       ";
nombre(234,:)="Defensa       ";
nombre(235,:)="Defensa       ";
nombre(236,:)="Defensa       ";
nombre(237,:)="Defensa       ";
nombre(238,:)="Defensa       ";
nombre(239,:)="Defensa       ";
nombre(240,:)="Defensa       ";
nombre(241,:)="Defensa       ";
nombre(242,:)="Defensa       ";
nombre(243,:)="Defensa       ";
nombre(244,:)="Defensa       ";
nombre(245,:)="Defensa       ";
nombre(246,:)="Defensa       ";
nombre(247,:)="Defensa       ";
nombre(248,:)="Defensa       ";
nombre(249,:)="Defensa       ";
nombre(250,:)="Defensa       ";
nombre(251,:)="Defensa       ";
nombre(252,:)="Defensa       ";
nombre(253,:)="Defensa       ";
nombre(254,:)="Defensa       ";
nombre(255,:)="Defensa       ";
nombre(256,:)="Defensa       ";
nombre(257,:)="Defensa       ";
nombre(258,:)="Defensa       ";
nombre(259,:)="Defensa       ";
nombre(260,:)="Defensa       ";
nombre(261,:)="Defensa       ";
nombre(262,:)="Defensa       ";
nombre(263,:)="Defensa       ";
nombre(264,:)="Defensa       ";
nombre(265,:)="Defensa       ";
nombre(266,:)="Defensa       ";
nombre(267,:)="Defensa       ";
nombre(268,:)="Defensa       ";
nombre(269,:)="Defensa       ";
nombre(270,:)="Defensa       ";
nombre(271,:)="Defensa       ";
nombre(272,:)="Defensa       ";
nombre(273,:)="Defensa       ";
nombre(274,:)="Defensa       ";
nombre(275,:)="Defensa       ";
nombre(276,:)="Defensa       ";
nombre(277,:)="Defensa       ";
nombre(278,:)="Defensa       ";
nombre(279,:)="Defensa       ";
nombre(280,:)="Defensa       ";
nombre(281,:)="Defensa       ";
nombre(282,:)="Defensa       ";
nombre(283,:)="Defensa       ";
nombre(284,:)="Defensa       ";
nombre(285,:)="Defensa       ";
nombre(286,:)="Defensa       ";
nombre(287,:)="Defensa       ";
nombre(288,:)="Defensa       ";
nombre(289,:)="Defensa       ";
nombre(290,:)="Defensa       ";
nombre(291,:)="Defensa       ";
nombre(292,:)="Defensa       ";
nombre(293,:)="Defensa       ";
nombre(294,:)="Defensa       ";
nombre(295,:)="Defensa       ";
nombre(296,:)="Defensa       ";
nombre(297,:)="Defensa       ";
nombre(298,:)="Defensa       ";
nombre(299,:)="Defensa       ";
nombre(300,:)="Defensa       ";
nombre(301,:)="Defensa       ";
nombre(302,:)="Defensa       ";
nombre(303,:)="Defensa       ";
nombre(304,:)="Defensa       ";
nombre(305,:)="Defensa       ";
nombre(306,:)="Defensa       ";
nombre(307,:)="Defensa       ";
nombre(308,:)="Defensa       ";
nombre(309,:)="Defensa       ";
nombre(310,:)="Defensa       ";
nombre(311,:)="Defensa       ";
nombre(312,:)="Defensa       ";
nombre(313,:)="Defensa       ";
nombre(314,:)="Defensa       ";
nombre(315,:)="Defensa       ";
nombre(316,:)="Defensa       ";
nombre(317,:)="Defensa       ";
nombre(318,:)="Defensa       ";
nombre(319,:)="Defensa       ";
nombre(320,:)="Defensa       ";
nombre(321,:)="Defensa       ";
nombre(322,:)="Defensa       ";
nombre(323,:)="Defensa       ";
nombre(324,:)="Defensa       ";
nombre(325,:)="Defensa       ";
nombre(326,:)="Defensa       ";
nombre(327,:)="Defensa       ";
nombre(328,:)="Defensa       ";
nombre(329,:)="Defensa       ";
nombre(330,:)="Defensa       ";
nombre(331,:)="Defensa       ";
nombre(332,:)="Defensa       ";
nombre(333,:)="Defensa       ";
nombre(334,:)="Defensa       ";
nombre(335,:)="Defensa       ";
nombre(336,:)="Defensa       ";
nombre(337,:)="Defensa       ";
nombre(338,:)="Defensa       ";
nombre(339,:)="Defensa       ";
nombre(340,:)="Defensa       ";
nombre(341,:)="Defensa       ";
nombre(342,:)="Defensa       ";
nombre(343,:)="Defensa       ";
nombre(344,:)="Defensa       ";
nombre(345,:)="Defensa       ";
nombre(346,:)="Defensa       ";
nombre(347,:)="Defensa       ";
nombre(348,:)="Defensa       ";
nombre(349,:)="Defensa       ";
nombre(350,:)="Defensa       ";
nombre(351,:)="Defensa       ";
nombre(352,:)="Defensa       ";
nombre(353,:)="Defensa       ";
nombre(354,:)="Defensa       ";
nombre(355,:)="Defensa       ";
nombre(356,:)="Defensa       ";
nombre(357,:)="Defensa       ";
nombre(358,:)="Defensa       ";
nombre(359,:)="Defensa       ";
nombre(360,:)="Defensa       ";
nombre(361,:)="Defensa       ";
nombre(362,:)="Defensa       ";
nombre(363,:)="Defensa       ";
nombre(364,:)="Defensa       ";
nombre(365,:)="Defensa       ";
nombre(366,:)="Defensa       ";
nombre(367,:)="Defensa       ";
nombre(368,:)="Defensa       ";
nombre(369,:)="Defensa       ";
nombre(370,:)="Defensa       ";
nombre(371,:)="Defensa       ";
nombre(372,:)="Defensa       ";
nombre(373,:)="Defensa       ";
nombre(374,:)="Defensa       ";
nombre(375,:)="Defensa       ";
nombre(376,:)="Defensa       ";
nombre(377,:)="Defensa       ";
nombre(378,:)="Defensa       ";
nombre(379,:)="Defensa       ";
nombre(380,:)="Defensa       ";
nombre(381,:)="Defensa       ";
nombre(382,:)="Defensa       ";
nombre(383,:)="Defensa       ";
nombre(384,:)="Defensa       ";
nombre(385,:)="Defensa       ";
nombre(386,:)="Defensa       ";
nombre(387,:)="Defensa       ";
nombre(388,:)="Defensa       ";
nombre(389,:)="Defensa       ";
nombre(390,:)="Defensa       ";
nombre(391,:)="Defensa       ";
nombre(392,:)="Defensa       ";
nombre(393,:)="Defensa       ";
nombre(394,:)="Defensa       ";
nombre(395,:)="Defensa       ";
nombre(396,:)="Defensa       ";
nombre(397,:)="Defensa       ";
nombre(398,:)="Defensa       ";
nombre(399,:)="Defensa       ";
nombre(400,:)="Defensa       ";
nombre(401,:)="Defensa       ";
nombre(402,:)="Defensa       ";
nombre(403,:)="Defensa       ";
nombre(404,:)="Defensa       ";
nombre(405,:)="Defensa       ";
nombre(406,:)="Delantero     ";
nombre(407,:)="Delantero     ";
nombre(408,:)="Delantero     ";
nombre(409,:)="Delantero     ";
nombre(410,:)="Delantero     ";
nombre(411,:)="Delantero     ";
nombre(412,:)="Delantero     ";
nombre(413,:)="Delantero     ";
nombre(414,:)="Delantero     ";
nombre(415,:)="Delantero     ";
nombre(416,:)="Delantero     ";
nombre(417,:)="Delantero     ";
nombre(418,:)="Delantero     ";
nombre(419,:)="Delantero     ";
nombre(420,:)="Delantero     ";
nombre(421,:)="Delantero     ";
nombre(422,:)="Delantero     ";
nombre(423,:)="Delantero     ";
nombre(424,:)="Delantero     ";
nombre(425,:)="Delantero     ";
nombre(426,:)="Delantero     ";
nombre(427,:)="Delantero     ";
nombre(428,:)="Delantero     ";
nombre(429,:)="Delantero     ";
nombre(430,:)="Delantero     ";
nombre(431,:)="Delantero     ";
nombre(432,:)="Delantero     ";
nombre(433,:)="Delantero     ";
nombre(434,:)="Delantero     ";
nombre(435,:)="Delantero     ";
nombre(436,:)="Delantero     ";
nombre(437,:)="Delantero     ";
nombre(438,:)="Delantero     ";
nombre(439,:)="Delantero     ";
nombre(440,:)="Delantero     ";
nombre(441,:)="Delantero     ";
nombre(442,:)="Delantero     ";
nombre(443,:)="Delantero     ";
nombre(444,:)="Delantero     ";
nombre(445,:)="Delantero     ";
nombre(446,:)="Delantero     ";
nombre(447,:)="Delantero     ";
nombre(448,:)="Delantero     ";
nombre(449,:)="Delantero     ";
nombre(450,:)="Delantero     ";
nombre(451,:)="Delantero     ";
nombre(452,:)="Delantero     ";
nombre(453,:)="Delantero     ";
nombre(454,:)="Delantero     ";
nombre(455,:)="Delantero     ";
nombre(456,:)="Delantero     ";
nombre(457,:)="Delantero     ";
nombre(458,:)="Delantero     ";
nombre(459,:)="Delantero     ";
nombre(460,:)="Delantero     ";
nombre(461,:)="Delantero     ";
nombre(462,:)="Delantero     ";
nombre(463,:)="Delantero     ";
nombre(464,:)="Delantero     ";
nombre(465,:)="Delantero     ";
nombre(466,:)="Delantero     ";
nombre(467,:)="Delantero     ";
nombre(468,:)="Delantero     ";
nombre(469,:)="Delantero     ";
nombre(470,:)="Delantero     ";
nombre(471,:)="Delantero     ";
nombre(472,:)="Delantero     ";
nombre(473,:)="Delantero     ";
nombre(474,:)="Delantero     ";
nombre(475,:)="Delantero     ";
nombre(476,:)="Delantero     ";
nombre(477,:)="Delantero     ";
nombre(478,:)="Delantero     ";
nombre(479,:)="Delantero     ";
nombre(480,:)="Delantero     ";
nombre(481,:)="Delantero     ";
nombre(482,:)="Delantero     ";
nombre(483,:)="Delantero     ";
nombre(484,:)="Delantero     ";
nombre(485,:)="Delantero     ";
nombre(486,:)="Delantero     ";
nombre(487,:)="Delantero     ";
nombre(488,:)="Delantero     ";
nombre(489,:)="Delantero     ";
nombre(490,:)="Delantero     ";
nombre(491,:)="Delantero     ";
nombre(492,:)="Delantero     ";
nombre(493,:)="Delantero     ";
nombre(494,:)="Delantero     ";
nombre(495,:)="Delantero     ";
nombre(496,:)="Delantero     ";
nombre(497,:)="Delantero     ";
nombre(498,:)="Delantero     ";
nombre(499,:)="Delantero     ";
nombre(500,:)="Portero       ";
nombre(501,:)="Portero       ";
nombre(502,:)="Portero       ";
nombre(503,:)="Portero       ";
nombre(504,:)="Portero       ";
nombre(505,:)="Portero       ";
nombre(506,:)="Portero       ";
nombre(507,:)="Portero       ";
nombre(508,:)="Portero       ";
nombre(509,:)="Portero       ";
nombre(510,:)="Portero       ";
nombre(511,:)="Portero       ";
nombre(512,:)="Portero       ";
nombre(513,:)="Portero       ";
nombre(514,:)="Portero       ";
nombre(515,:)="Portero       ";
nombre(516,:)="Portero       ";
nombre(517,:)="Portero       ";
nombre(518,:)="Portero       ";
nombre(519,:)="Portero       ";
nombre(520,:)="Portero       ";
nombre(521,:)="Portero       ";
nombre(522,:)="Portero       ";
nombre(523,:)="Portero       ";
nombre(524,:)="Portero       ";
nombre(525,:)="Portero       ";
nombre(526,:)="Portero       ";
nombre(527,:)="Portero       ";
nombre(528,:)="Portero       ";
nombre(529,:)="Portero       ";
nombre(530,:)="Portero       ";
nombre(531,:)="Portero       ";
nombre(532,:)="Portero       ";
nombre(533,:)="Portero       ";
nombre(534,:)="Portero       ";
nombre(535,:)="Portero       ";
nombre(536,:)="Portero       ";
nombre(537,:)="Portero       ";
nombre(538,:)="Portero       ";
nombre(539,:)="Portero       ";
nombre(540,:)="Portero       ";
nombre(541,:)="Portero       ";
nombre(542,:)="Portero       ";
nombre(543,:)="Portero       ";
nombre(544,:)="Portero       ";
nombre(545,:)="Portero       ";
nombre(546,:)="Portero       ";
nombre(547,:)="Portero       ";
nombre(548,:)="Portero       ";
nombre(549,:)="Portero       ";
nombre(550,:)="Portero       ";
nombre(551,:)="Portero       ";
nombre(552,:)="Portero       ";
nombre(553,:)="Portero       ";
nombre(554,:)="Portero       ";
nombre(555,:)="Portero       ";
nombre(556,:)="Portero       ";

%Sobre los cuales se responden las siguientes preguntas 
%   01. ¿ES medio Campista?
%   02. ¿Es Delantero?
%   03. ¿Es Defensa?
%   04. ¿Es Portero?
%   05. ¿Es titular?


%Con lo cual se puede levantar los siguientes vectores de características
P=[ 
5	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
5	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	2	0	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
5	0	0	3	0
5	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
5	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	0	0	3	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
5	1	0	0	0
0	1	0	0	0
0	1	0	0	0
5	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
5	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	1	0	0	0
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
5	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
5	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
5	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4
5	0	0	0	4
0	0	0	0	4
0	0	0	0	4
5	0	0	0	4
5	0	0	0	4
0	0	0	0	4
0	0	0	0	4
0	0	0	0	4


];  
P=P'; %Transpongo la matriz (filas características y columnas numero de entrada)

%NET = NEWSOM(P,[D1,D2,...],TFCN,DFCN,OLR,OSTEPS,TLR,TNS) takes,
       %P       - RxQ matrix of Q representative input vectors.
       %Di      - Size of ith layer dimension, defaults = [5 8].
       %TFCN    - Topology function, default = 'hextop'. HEXTOP, GRIDTOP, or RANDTOP
       %DFCN    - Distance function, default = 'linkdist'.LINKDIST, DIST, or MANDIST
       %STEPS   - Steps for neighborhood to shrink to 1, default = 100.
       %IN      - Initial neighborhood size, default = 3.

net = newsom(P,[4 1]); %Malla de 4 para el Delantero, Defensa, Centrocampista y Portero

net.trainParam.epochs = 1000;
net = train(net,P);

CLASSES = sim(net,P); %Nro. de filas son los clusters, Nro. de columnas son los ítems clasificados

countP=0;
countDf=0;
countDt=0;
countCp=0;

for k=1:size(CLASSES,1)
    display(sprintf('\nGrupo Nro.%i\n',k));
    for l=1:size(CLASSES,2)
        if CLASSES(k,l)==1
            if nombre(l,:)=="Portero       "
                countP=countP+1;
            end
            if nombre(l,:)=="Defensa       "
                countDf=countDf+1;
            end
            if nombre(l,:)=="Centrocampista"
                countCp=countCp+1;
            end
            if nombre(l,:)=="Delantero     "
                countDt=countDt+1;
            end           
        end
    end
     Portero=sprintf('Portero: %d ',countP);
     Defensa=sprintf('Defensa: %d ',countDf);
     Medio=sprintf('Medio: %d ',countCp);
     Delantero=sprintf('Delantero: %d ',countDt);
    disp(Portero);
    disp(Defensa);
    disp(Medio);
    disp(Delantero);
    countP=0;
    countDf=0;
    countDt=0;
    countCp=0;
    display(sprintf('\n'));
end



