# Generated by binpac_quickstart

# Analyzer for NNTP
#  - nntp-protocol.pac: describes the nntp protocol messages
#  - nntp-analyzer.pac: describes the nntp analyzer code

%include binpac.pac
%include bro.pac

%extern{
	#include "events.bif.h"
%}

analyzer NNTP withcontext {
	connection: NNTP_Conn;
	flow:       NNTP_Flow;
};

# Our connection consists of two flows, one in each direction.
connection NNTP_Conn(bro_analyzer: BroAnalyzer) {
	upflow   = NNTP_Flow(true);
	downflow = NNTP_Flow(false);
};

%include nntp-protocol.pac

# Now we define the flow:
flow NNTP_Flow(is_orig: bool) {

	# ## TODO: Determine if you want flowunit or datagram parsing:

	# Using flowunit will cause the anlayzer to buffer incremental input.
	# This is needed for &oneline and &length. If you don't need this, you'll
	# get better performance with datagram.

	# flowunit = NNTP_PDU(is_orig) withcontext(connection, this);
	datagram = NNTP_PDU(is_orig) withcontext(connection, this);

};

%include nntp-analyzer.pac